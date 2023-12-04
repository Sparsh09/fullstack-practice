const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

app.use(express.json());
let ADMINS = [];
let USERS = [];
let COURSES = [];
const SECRET_KEY = "IRON-MAN";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchaseCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

mongoose.connect(
  "mongodb+srv://geekyprogrammer99:4MhxGWGudBOqa0IZ@cluster0.pyrb1ni.mongodb.net/"
);
function generateToken(user) {
  return jwt.sign(user, SECRET_KEY);
}

function verifyToken(req, res, next) {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const token = authHeaders.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, data) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = data;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

function adminAuthentication(req, res, next) {
  var { username, password } = req.headers;
  var user = ADMINS.find(
    (admin) => admin.username === username && admin.password === password
  );
  if (user) {
    next();
  } else {
    res.status(403).json({ message: "Admin Authentication Failed" });
  }
}

function userAuthentication(req, res, next) {
  var { username, password } = req.headers;
  var user = USERS.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    req.user = user; // this will pass the authenticated user to the request and on next the funnction will get this user
    next();
  } else {
    res.status(403).json({ message: "User Authentication Failed" });
  }
}

// Admin routes
app.post("/admin/signup", async (req, res) => {
  // logic to sign up admin
  var { username, password } = req.body;
  if (body.username.length > 0 && body.password.length > 0) {
    var existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      res.status(403).json({ message: "This username is already registered" });
    } else {
      const newAdmin = new Admin({ username, password });
      await newAdmin.save();
      const token = generateToken(admin);
      res.json({ message: "ADMIN create successfully", token: token });
    }
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  const admin = {
    username: req.headers.username,
    password: req.headers.password,
  };
  console.log();
  if (
    ADMINS.find(
      (a) => a.username === admin.username && a.password === admin.password
    )
  ) {
    const token = generateToken(admin);
    res.json({ message: "Login successfully", token: token });
  } else {
    res.json({ message: "Login Failed" });
  }
});

app.post("/admin/courses", verifyToken, (req, res) => {
  // logic to create a course
  var course = req.body;
  var id = Date.now();
  var existingCourse = COURSES.find((c) => c.id === id);
  if (existingCourse) {
    res.status(400).json({ message: "Course already exists" });
  } else {
    course.id = id;
    COURSES.push(course);
    res.json({ message: "Course Created", id: id });
  }
});

app.put("/admin/courses/:courseId", verifyToken, (req, res) => {
  // logic to edit a course
  var id = Number(req.params.courseId);
  var body = req.body;
  var course = COURSES.find((courseData) => courseData.id === id);
  if (course) {
    COURSES = COURSES.filter((c) => c.id !== course.id);
    body.id = id;
    COURSES.push(body);
    res.json({ message: "Course Updated", id: id });
  } else {
    res.status(404).json({ message: "Course Not Found", id: id });
  }
});

app.get("/admin/courses", verifyToken, (req, res) => {
  // logic to get all courses
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  var body = req.body;

  if (body.username.length > 0 && body.password.length > 0) {
    if (
      USERS.length === 0 ||
      !USERS.find((user) => user.username === body.username)
    ) {
      var id = Date.now();
      var user = { ...body, id: id, purchaseCourse: [] };
      USERS.push(user);
      res.json({ message: "User Added", id: id, token: generateToken(user) });
    } else {
      res.status(403).json({ message: "User Already Exsists", id: id });
    }
  } else {
    res.status(404).json({ message: "username or Password Invalid" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  var { username, password } = req.headers;
  res.json({
    message: "Login Successful",
    token: generateToken({ username: username, password: password }),
  });
});

app.get("/users/courses", verifyToken, (req, res) => {
  // logic to list all courses
  res.json({ courses: COURSES.filter((course) => course.published) });
});

app.post("/users/courses/:courseId", verifyToken, (req, res) => {
  // logic to purchase a course
  const courseId = req.params.courseId;
  const course = COURSES.find((c) => {
    return c.id === Number(courseId);
  });
  if (course) {
    USERS.forEach((u) => {
      if (u.username === req.user.username) {
        u.purchaseCourse.push(course);
      }
    });
    // req.user.purchaseCourse.push(course);
    res.json({ message: "Course purchase successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", verifyToken, (req, res) => {
  // logic to view purchased courses
  const user = USERS.filter((u) => u.username === req.user.username);
  res.json(user[0].purchaseCourse);
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

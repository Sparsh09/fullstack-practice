const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.json());
let ADMINS = [];
let USERS = [];
let COURSES = [];

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
    next();
  } else {
    res.status(403).json({ message: "User Authentication Failed" });
  }
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  var body = req.body;
  if (body.username.length > 0 && body.password.length > 0) {
    var existingAdmin = ADMINS.find(
      (value) => value.username === body.username
    );
    if (ADMINS.length > 0 && existingAdmin) {
      res.status(403).json({ message: "This username is already registered" });
    } else {
      ADMINS.push({ username: body.username, password: body.password });
      res.json({ message: "ADMIN create successfully" });
    }
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ message: "Login successfully" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  var body = req.body;
  var id = Date.now();
  var existingCourse = COURSES.find((c) => c.id === id);
  if (existingCourse) {
    res.status(400).json({ message: "Course already exists" });
  } else {
    var course = req.body;
    course.id = id;
    COURSES.push(course);
    res.json({ message: "Course Created", id: id });
  }
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  var id = Number(req.params.courseId);
  var body = req.body;
  var course = COURSES.find((courseData) => courseData.id === id);
  if (course) {
    Object.assign(course, body);
    res.json({ message: "Course Updated", id: id });
  } else {
    res.status(404).json({ message: "Course Not Found", id: id });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
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
      res.json({ message: "User Added", id: id });
    } else {
      res.status(403).json({ message: "User Already Exsists", id: id });
    }
  } else {
    res.status(404).json({ message: "username or Password Invalid" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  res.json({ message: "Login Successful" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  // logic to list all courses
  res.json({ courses: COURSES.filter((course) => course.published) });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

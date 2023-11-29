const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.json());
let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  var body = req.body;
  if (body.email.length > 0 && body.password.length > 0) {
    var existingAdmin = ADMINS.find((value) => value.email === body.email);
    if (ADMINS.length > 0 && existingAdmin) {
      res.status(403).json({ message: "This email is already registered" });
    } else {
      ADMINS.push({ email: body.email, password: body.password });
      res.json({ message: "ADMIN create successfully" });
    }
  } else {
    res.status(403).json({ message: "Invalid email or password" });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  var body = req.body;
  if (body.email.length > 0 && body.password.length > 0) {
    var existingAdmin = ADMINS.find((value) => value.email === body.email);
    if (existingAdmin) {
      if (existingAdmin.password === body.password) {
        res.json({ message: "Login Successfully" });
      } else {
        res.status(400).json({ message: "Wrong Password" });
      }
    } else {
      res.status(404).json({ message: "Email Not Found" });
    }
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
  var body = req.body;
  var id = Date.now();
  var existingCourse = COURSES.find((c) => c.id === id);
  if (existingCourse) {
    res.status(400).json({ message: "Course already exists" });
  } else {
    COURSES.push({ course: body.course, id: id });
    res.json({ message: "Course Created", id: id });
  }
});

app.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
  var id = req.params.id;
  var body = req.body;
  console.log(id, body.course);
  var course = COURSES.find((courseData) => courseData.id === id);
  if (course) {
    var indexValue = -1;

    COURSES.forEach((courseData, index) => {
      if (courseData.id === course.id) {
        indexValue = index;
      }
    });
    COURSES[indexValue] = body.course;
    res.json({ message: "Course Updated", id: id });
  } else {
    res.status(404).json({ message: "Course Not Found", id: id });
  }
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

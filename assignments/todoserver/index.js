var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var cors = require("cors");
var app = express();
var port = 3000;
var id = 0;
// to prevent cors errors , we need to send the frontent page from the same origin as the backend
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

function getTodos(req, res) {
  fs.readFile("todos.json", "utf8", (err, data) => {
    var ans = JSON.parse(data);
    res.json(ans);
  });
}

function createTodo(req, res) {
  const body = req.body;
  id += Math.floor(Math.random() * 1000000);
  const newTodo = {
    title: body.title,
    completed: body.completed,
    description: body.description,
    id: id,
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
}

function handleFirst(req, res) {
  console.log("Server is started");
}

function getTodoById(req, res) {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    var todos = JSON.parse(data);
    todos.forEach((todo) => {
      if (todo.id === Number(req.params.id)) {
        res.status(200).json(todo);
      }
    });
  });
}

function updateTodoById(req, res) {
  var body = req.body;
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    var todos = JSON.parse(data);
    todos.forEach((todo, index) => {
      if (todo.id === Number(req.params.id)) {
        todos[index] = body;
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
          if (err) throw err;
          res.status(200).send({ id: req.params.id, updated: true });
        });
      }
    });
  });
}

function deleteTodoById(req, res) {
  var id = req.params.id;
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    var todos = JSON.parse(data);
    var updatedTodo = [];
    todos.forEach((todo) => {
      if (todo.id !== Number(id)) {
        updatedTodo.push(todo);
      }
    });
    fs.writeFile("todos.json", JSON.stringify(updatedTodo), (err) => {
      if (err) throw err;
      res.status(200).json({ id: id, deleted: true });
    });
  });
}
app.use(bodyParser.json());
app.get("/todos", getTodos);
app.post("/todos", createTodo);
app.get("/todos/:id", getTodoById);
app.put("/todos/:id", updateTodoById);
app.delete("/todos/:id", deleteTodoById);
app.listen(port, handleFirst);

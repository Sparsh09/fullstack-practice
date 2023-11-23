var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var todos = [];
var id = 0;

function getTodos(req, res) {
  res.status(200).send(todos);
}
function createTodo(req, res) {
  const body = req.body;
  id += 1;
  todos.push({
    title: body.title,
    completed: body.completed,
    description: body.description,
    id: id,
  });
  var response = { id: id };
  res.status(201).send(response);
}

function handleFirst(req, res) {
  console.log("Server is started");
}

function getTodoById(req, res) {
  res.status(200).send(todos[req.params.id - 1]);
}

function updateTodoById(req, res) {
  var body = req.body;
  todos[req.params.id - 1] = {
    title: body.title,
    description: body.description,
    completed: body.completed,
  };
  res.status(200).send({ id: req.params.id, updated: true });
}
function checkId(id, data) {
  return data.id !== Number(id);
}
function deleteTodoById(req, res) {
  var id = req.params.id;
  todos = todos.filter((v) => checkId(id, v));
  res.status(200).send({ id: id, deleted: true });
}
app.use(bodyParser.json());
app.get("/todos", getTodos);
app.post("/todos", createTodo);
app.get("/todos/:id", getTodoById);
app.put("/todos/:id", updateTodoById);
app.delete("/todos/:id", deleteTodoById);
app.listen(port, handleFirst);

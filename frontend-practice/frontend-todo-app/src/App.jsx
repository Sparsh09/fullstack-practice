import "./App.css";
import { useState, useEffect } from "react";

function useTodos() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => setTodo(data));
    });
  }, []);
  return todo;
}
function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map((todo) => {
        return <Todo todo={todo} key="1"></Todo>;
      })}
    </>
  );
}

function Todo(todoItem) {
  const { title, description, id } = todoItem.todo;
  return (
    <div key={id}>
      <div style={{ display: "flex" }}>
        {title}
        <span>{description}</span>
        <button>Delete</button>
      </div>
      <br></br>
    </div>
  );
}
export default App;

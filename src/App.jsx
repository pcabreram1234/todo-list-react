import React, { useId } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
// import "./App.css";

function App() {
  const todos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Cortar pepino", completed: false },
    { text: "Cortar ajies", completed: false },
    { text: "Cortar ajo", completed: false },
  ];

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={useId()}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

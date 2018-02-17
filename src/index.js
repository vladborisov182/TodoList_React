import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList"
  

const destination = document.querySelector(".app");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);

import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  return <section className="todo-List-container">{props.children}</section>;
}

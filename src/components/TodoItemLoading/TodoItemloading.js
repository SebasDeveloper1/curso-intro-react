import React from "react";
import "./TodoItemLoading.css";
export function TodoItemloading() {
  return (
    <li className="todo-item">
      <span className="todo-item-loading__icon todo-item-loading__icon-check"></span>
      <p className="todo-item-loading__txt"> Cargando...</p>
      <span className="todo-item-loading__icon todo-item-loading__icon-delete"></span>
    </li>
  );
}

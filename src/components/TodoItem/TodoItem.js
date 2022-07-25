import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <i class="fas fa-check-circle"></i>
      </span>
      <p
        className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <i class="fas fa-trash"></i>
      </span>
    </li>
  );
}

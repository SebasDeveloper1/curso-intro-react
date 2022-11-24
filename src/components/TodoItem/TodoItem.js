import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <i className="fas fa-check-circle"></i>
      </span>
      <p
        className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <i className="fas fa-trash"></i>
      </span>
      <span className="Icon Icon-edit" onClick={props.onEdit}>
        <i className="fas fa-pen"></i>
      </span>
    </li>
  );
}

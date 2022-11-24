import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const navigate = useNavigate();
  const onClickFunction = () => {
    navigate("/new-todo");
  };
  return (
    <button className={`create-todo-btn`} onClick={onClickFunction}>
      +
    </button>
  );
}

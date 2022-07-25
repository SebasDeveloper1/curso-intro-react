import React from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const onClickFunction = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className={`create-todo-btn`} onClick={onClickFunction}>
      +
    </button>
  );
}

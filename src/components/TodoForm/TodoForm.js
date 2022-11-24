import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

export function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { loading, addTodo, editTodo } = useContext(TodoContext);
  const navigate = useNavigate();
  const { slug, text } = useParams();

  useEffect(() => {
    return setNewTodoValue(text);
  }, [loading, text]);

  const onChange = (event) => {
    setNewTodoValue(event.target.value.trim());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (props.submitEvent === "createTodo") {
      addTodo(newTodoValue);
    } else if (props.submitEvent === "editTodo") {
      editTodo(Number(slug), newTodoValue);
    }
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm-container">
      <label>{props.textLabel}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Tarea por hacer"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.textBtn}
        </button>
      </div>
    </form>
  );
}

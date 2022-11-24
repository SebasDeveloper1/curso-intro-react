import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import "./NewTodoPage.css";

export function NewTodoPage() {
  return (
    <div className="new-todo-page">
      <TodoForm
        textLabel="Crea una nueva tarea"
        textBtn="Añadir"
        submitEvent="createTodo"
      />
    </div>
  );
}

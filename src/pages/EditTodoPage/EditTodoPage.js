import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import "./EditTodoPage.css";

export function EditTodoPage() {
  return (
    <div className="edit-todo-page">
      <TodoForm
        textLabel="Edita la tarea"
        textBtn="Guardar"
        submitEvent="editTodo"
      />
    </div>
  );
}

import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="todo-counter">
      😋Has completado {completedTodos} de {totalTodos} tareas!
    </h2>
  );
}

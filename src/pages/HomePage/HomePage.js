import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoTitle } from "../../components/TodoTitle/TodoTitle";
import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { TodoItemloading } from "../../components/TodoItemLoading/TodoItemloading";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  const navigate = useNavigate();
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  const onEdit = (id, text) => {
    navigate(`/edit-todo/${id}/${text}`);
  };

  return (
    <main className="todo-home-page">
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error!!!!</p>}
        {loading && <TodoItemloading />}
        {loading && <TodoItemloading />}
        {loading && <TodoItemloading />}
        {!loading && !searchedTodos.length && <p>Crea tu primera tarea!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => onEdit(todo.id, todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </main>
  );
}

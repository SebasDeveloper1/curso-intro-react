import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoTitle } from "../components/TodoTitle/TodoTitle";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/index";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoItemloading } from "../components/TodoItemLoading/TodoItemloading";

export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error!!!!</p>}
        {loading && <TodoItemloading />}
        {loading && <TodoItemloading />}
        {loading && <TodoItemloading />}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditTodoPage } from "../pages/EditTodoPage/EditTodoPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { NewTodoPage } from "../pages/NewTodoPage/NewTodoPage";
import { TodoProvider } from "../TodoContext";

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/new-todo" element={<NewTodoPage />} />
          <Route
            exact
            path="/edit-todo/:slug/:text"
            element={<EditTodoPage />}
          />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

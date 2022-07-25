import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";
export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="todo-search"
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
}

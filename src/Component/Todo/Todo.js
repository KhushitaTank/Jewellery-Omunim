import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import css from "./Todo.module.css";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Todo</h1>
      <Dropdown
        show={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={css.dropdownWrapper}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={css.dropdown}>
          Activity List
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Done List</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Complete List</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Deleted List</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Staff Todo List</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Todo;

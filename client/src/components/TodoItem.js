import React, { Fragment, useState } from "react";
import { deleteTodo } from "../api";

const TodoItem = ({ todo, setTodos }) => {
  console.log("todo in delete", todo);
  const handleDeleteClick = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo.todo_id));
  };
  return (
    <Fragment>
      <tr>
        <td>{todo.description}</td>
        <td>Edit</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteClick(todo.todo_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default TodoItem;

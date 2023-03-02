import React, { Fragment } from "react";

const TodoItem = ({ todo }) => {
  console.log("todo", todo);
  return (
    <Fragment>
      <tr>
        <td>{todo.description}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </Fragment>
  );
};

export default TodoItem;

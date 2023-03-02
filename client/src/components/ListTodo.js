import React, { Fragment } from "react";
import TodoItem from "./TodoItem";

const ListTodo = ({ todos, setTodos }) => {
  console.log("todos", todos);
  const renderedTodo = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.todo_id}
        todo={todo}
        setTodos={setTodos}
        todos={todos}
      />
    );
  });
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderedTodo}</tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;

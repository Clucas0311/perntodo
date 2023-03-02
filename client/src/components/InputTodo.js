import React, { Fragment, useState } from "react";
import { createTodo } from "../api";
const InputTodo = ({ setTodos }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    console.log("value", event.target.value);
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = await createTodo(description);
    console.log("newTodo", newTodo);
    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    setDescription("");
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={handleDescriptionChange}
          value={description}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;

import React, { Fragment, useState, useEffect } from "react";
import { fetchAllTodos } from "./api";
import InputTodo from "./components/InputTodo";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const todo = await fetchAllTodos();
      console.log("todo", todo);
      setTodo(todo);
    };
    getAllTodos();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
};

export default App;

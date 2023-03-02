import React, { Fragment, useState, useEffect } from "react";
import { fetchAllTodos } from "./api";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const todos = await fetchAllTodos();
      console.log("todos", todos);
      setTodo(todos);
    };
    getAllTodos();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo todos={todos} />
      </div>
    </Fragment>
  );
};

export default App;

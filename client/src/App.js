import React, { Fragment, useState, useEffect } from "react";
import { fetchAllTodos } from "./api";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const todos = await fetchAllTodos();
      console.log("todos", todos);
      setTodos(todos);
    };
    getAllTodos();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <InputTodo setTodos={setTodos} />
        <ListTodo todos={todos} setTodos={setTodos} />
      </div>
    </Fragment>
  );
};

export default App;

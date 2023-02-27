// Import express from the express library
const express = require("express");
// Call and run our express library
const app = express();
// import and call cors
const cors = require("cors");
const morgan = require("morgan");
const pool = require("./db");
const TodoRepo = require("./repos/todo-repo");

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await TodoRepo.insert(description);
    res.json(newTodo);
  } catch (error) {
    console.error("There was an error creating todo", error.message);
    throw error;
  }
});
// get all todo
app.get("/todos", async (req, res) => {
  try {
    const getAllTodos = await TodoRepo.find();
    res.json(getAllTodos);
  } catch (error) {
    console.error("There was an error getting todos", error.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoRepo.findById(id);
    res.json(todo);
  } catch (error) {
    console.error("There was an error get single todo", error.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await TodoRepo.update(id, description);
    res.json("Todo was updated!");
  } catch (error) {
    console.error("There was an error updating todo", error.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await TodoRepo.delete(id);
    res.json("Todo was deleted!");
  } catch (error) {
    console.error("There was an error deleting todo", error.message);
  }
});

// we need to get data from the client side in order to do so we have to get it from
// the request.body object this middleware allows us to get json data from the body object
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Currently listening on ${PORT}`));

const express = require("express");
const TodoRepo = require("../repos/todo-repo");
const todoRouter = express.Router();

// POST /api/todos
todoRouter.post("/", async (req, res) => {
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
// GET //api/todos/:id
todoRouter.get("/", async (req, res) => {
  try {
    const getAllTodos = await TodoRepo.find();
    res.json(getAllTodos);
  } catch (error) {
    console.error("There was an error getting todos", error.message);
  }
});

// get a todo
// GET /api/todos/:id
todoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoRepo.findById(id);
    res.json(todo);
  } catch (error) {
    console.error("There was an error get single todo", error.message);
  }
});

// update a todo
// UPDATE PUT api/todos/:id
todoRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await TodoRepo.update(id, description);
    console.log("updatedTodo", updatedTodo);
    res.json(updatedTodo);
  } catch (error) {
    console.error("There was an error updating todo", error.message);
  }
});

// delete a todo
// DELETE api/todos/:id
todoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await TodoRepo.delete(id);
    res.json("Todo was deleted!");
  } catch (error) {
    console.error("There was an error deleting todo", error.message);
  }
});

module.exports = todoRouter;

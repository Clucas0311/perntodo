// Import express from the express library
const express = require("express");
// Call and run our express library
const app = express();
// import and call cors
const cors = require("cors");
const morgan = require("morgan");
const pool = require("./db");

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    console.log("description", description);
    const newTodo = await pool.query(
      `
        INSERT INTO todo (description)
        VALUES ($1)
    `,
      [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.error("There was an error creating todo", error.message);
    throw error;
  }
});
// get all todo

// update a todo

// delete a todo

// we need to get data from the client side in order to do so we have to get it from
// the request.body object this middleware allows us to get json data from the body object
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Currently listening on ${PORT}`));

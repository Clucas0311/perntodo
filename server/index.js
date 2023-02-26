// Import express from the express library
const express = require("express");
// Call and run our express library
const app = express();
// import and call cors
const cors = require("cors");
const morgan = require("morgan");
const client = require("./db");

// middleware
app.use(morgan("dev"));
app.use(cors());

// ROUTES

// create a todo
// app.post("/todos", async(req, res, next) => {
//     try {

//     } catch (error) {
//         console.error("There was an error creating ")
//     }
// })
// get all todo

// update a todo

// delete a todo

// we need to get data from the client side in order to do so we have to get it from
// the request.body object this middleware allows us to get json data from the body object
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Currently listening on ${PORT}`));

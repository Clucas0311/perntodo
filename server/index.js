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

// we need to get data from the client side in order to do so we have to get it from
// the request.body object this middleware allows us to get json data from the body object
app.use(express.json());

const apiRouter = require("./api");
app.use("/api", apiRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Currently listening on ${PORT}`));

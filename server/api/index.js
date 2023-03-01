const express = require("express");
const apiRouter = express.Router();

const todosRouter = require("./todos");
apiRouter.use("/todos", todosRouter);

module.exports = apiRouter;

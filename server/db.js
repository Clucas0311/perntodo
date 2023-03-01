// Connection to our database - take the library
const { Pool } = require("pg");

// Specify how we want to connect to it
const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;

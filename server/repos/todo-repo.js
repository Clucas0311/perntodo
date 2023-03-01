const pool = require("../db");
class TodoRepo {
  // get all todos
  static async find() {
    const { rows } = await pool.query(`
        SELECT * FROM todo;
    `);
    return rows;
  }

  // get todo by id
  static async findById(id) {
    try {
      const {
        rows: [todo],
      } = await pool.query(
        `
              SELECT * FROM todo
              WHERE todo_id= $1
          `,
        [id]
      );
      return todo;
    } catch (error) {
      console.error("There was an error getting todo", error);
    }
  }

  // create a new todo
  static async insert(description) {
    const { rows } = await pool.query(
      `
              INSERT INTO todo (description)
              VALUES ($1)
              RETURNING *;
          `,
      [description]
    );
    return rows;
  }

  // update a todo
  static async update(id, description) {
    const {
      rows: [todo],
    } = await pool.query(
      `
        UPDATE todo
        SET description=$2
        WHERE todo_id=$1
        RETURNING *;
    `,
      [id, description]
    );
    console.log("todo", todo);
    return todo;
  }

  // delete a todo
  static async delete(id) {
    try {
      await pool.query(
        `
              DELETE FROM todo
              WHERE todo_id = $1
          `,
        [id]
      );
    } catch (error) {
      console.error("There was an error deleting todo", error.message);
    }
  }
}

module.exports = TodoRepo;

const pool = require("../db");
class TodoRepo {
  static async find() {
    const { rows } = await pool.query(`
        SELECT * FROM todo;
    `);
    return rows;
  }
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
}

module.exports = TodoRepo;

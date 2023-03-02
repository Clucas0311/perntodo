import React, { Fragment, useState } from "react";
import { editTodo } from "../api";

const EditTodo = ({ setTodos, todo, todos }) => {
  const [description, setDescription] = useState(todo.description);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEditClick = async (event) => {
    event.preventDefault();
    const editedTodo = await editTodo(todo.todo_id, description);
    const updatedTodo = todos.map((todoItem) => {
      if (todoItem.todo_id === todo.todo_id) {
        return { ...todoItem, ...editedTodo };
      }
      return todoItem;
    });
    setTodos(updatedTodo);
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => handleEditClick(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;

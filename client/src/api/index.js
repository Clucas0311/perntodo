const BASE_URL = "http://localhost:5000/api";

export const createTodo = async (description) => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error creating todo", error.message);
  }
};

export const fetchAllTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching all the todos", error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("There was an error deleting todo", error.message);
  }
};

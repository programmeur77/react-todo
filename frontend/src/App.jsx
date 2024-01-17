import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleOnChange = (value) => {
    setNewItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Todo = {
      id: todos.length + 1,
      content: newItem,
      completed: false,
    };

    if (todos.length === 0) {
      setTodos([Todo]);
    }

    setTodos([...todos, Todo]);
  };

  return (
    <>
      <form action="POST" className="todo-form">
        <label htmlFor="New item">New item</label>
        <input
          type="text"
          name="new-item"
          className="todo-form__input"
          autoFocus
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <button className="todo-form__submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
};

export default App;

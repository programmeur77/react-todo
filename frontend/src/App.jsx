import { useEffect, useState } from "react";

import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.getItem("todos") &&
      setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  const setTodosAndSave = (todos) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    const NewTodo = {
      id: crypto.randomUUID(),
      content: newItem,
      completed: false,
    };

    if (todos.length === 0) {
      setTodosAndSave([NewTodo]);
    }

    setTodosAndSave([...todos, NewTodo]);
  };

  const handleOnChange = (inputValue) => {
    setNewItem(inputValue);
  };

  const handleIsCompleted = (todo) => {
    const todosNotConcerned = todos.filter(
      (todoItem) => todoItem.id !== todo.id
    );

    const concernedTodo = todos.find((todoItem) => todoItem.id === todo.id);

    const updatedTodo = {
      id: concernedTodo.id,
      content: concernedTodo.content,
      completed: !concernedTodo.completed,
    };

    setTodosAndSave([...todosNotConcerned, updatedTodo]);
  };

  return (
    <>
      <form action="POST" className="todo-form" onSubmit={handleSubmit}>
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

      <div className="display-todos">
        <ul className="todos-list">
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <>
                  <li className="todo-list__item" key={todo.id}>
                    {todo.completed ? (
                      <IoIosCheckmarkCircle />
                    ) : (
                      <FaRegCircle
                        className="todolist__item-is-completed"
                        onClick={() => handleIsCompleted(todo)}
                      />
                    )}
                    {todo.content}
                    <RiDeleteBinLine className="todolist__item-remove" />
                  </li>
                </>
              );
            })
          ) : (
            <p>No TODOs Yet</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default App;

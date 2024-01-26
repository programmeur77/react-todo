import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Task = ({ todos, setTodosAndSave }) => {
  const [newItem, setNewItem] = useState("");
  const [completedTodoItems, setCompletedTodoItems] = useState([]);

  useEffect(() => {
    setCompletedTodoItems(todos.filter((todo) => todo.completed === true));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    const NewTodo = {
      id: crypto.randomUUID(),
      content: newItem,
      completed: false,
    };

    if (!todos) {
      setTodosAndSave([NewTodo]);
    }

    setTodosAndSave([...todos, NewTodo]);
    setNewItem("");
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

  const handleDeleteTodo = (todoId) => {
    setTodosAndSave(todos.filter((todoItem) => todoItem.id !== todoId));
  };
  return (
    <>
      <TodoForm
        newItem={newItem}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
      <div className="display-todos">
        <ul className="todos-list">
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <Todos
                  todo={todo}
                  handleIsCompleted={handleIsCompleted}
                  handleDeleteTodo={handleDeleteTodo}
                  key={todo.id}
                />
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

export default Task;

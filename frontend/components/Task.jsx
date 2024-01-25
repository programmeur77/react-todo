import { useState, useEffect } from "react";

import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
            todos
              .filter((todo) => todo.completed === false)
              .map((todo) => {
                return (
                  <Todos
                    todo={todo}
                    handleIsCompleted={handleIsCompleted}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              })
          ) : (
            <p>No TODOs Yet</p>
          )}
        </ul>

        <section className="todo-list__completed-items">
          <h1 className="completed-items__section-title">
            Completed TODO items
          </h1>
          {completedTodoItems.length > 0 ? (
            completedTodoItems.map((completedItem) => {
              return (
                <>
                  <ul className="todo-list__all-completed-items">
                    <li
                      className="todo-list__item todo-list__item--completed"
                      key={completedItem.id}
                      onClick={() => handleIsCompleted(completedItem)}
                    >
                      <IoIosCheckmarkCircle
                        className="todolist__item-complete-circle"
                        onClick={() => handleIsCompleted()}
                      />
                      {completedItem.content}
                      <RiDeleteBinLine
                        className="todolist__item-remove-icon"
                        onClick={() => handleDeleteTodo(todo.id)}
                      />
                    </li>
                  </ul>
                </>
              );
            })
          ) : (
            <p>No TODO completed for the moment</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Task;

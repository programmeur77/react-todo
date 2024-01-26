import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

import "./../style/components/todos.scss";

const Todos = ({ todo, handleIsCompleted, handleDeleteTodo }) => {
  return (
    <>
      <ul className="todo-list">
        <li
          className={
            todo.completed
              ? "todo-list__item todo-list__item--completed"
              : "todo-list__item"
          }
        >
          {todo.completed ? (
            <IoIosCheckmarkCircle
              className="todo-list__item-completed-icon"
              onClick={() => handleIsCompleted(todo)}
            />
          ) : (
            <FaRegCircle
              className="todo-list__item-circle-icon"
              onClick={() => handleIsCompleted(todo)}
            />
          )}
          {todo.content}
          <RiDeleteBinLine
            className="todo-list__item-remove-icon"
            onClick={() => handleDeleteTodo(todo.id)}
          />
        </li>
      </ul>
    </>
  );
};

export default Todos;

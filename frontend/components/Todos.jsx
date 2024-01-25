import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

const Todos = ({ todo, handleIsCompleted, handleDeleteTodo }) => {
  return (
    <>
      <ul className="todo-list__list">
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
              className="todolist__item-circle"
              onClick={() => handleIsCompleted(todo)}
            />
          )}
          {todo.content}
          <RiDeleteBinLine
            className="todolist__item-remove-icon"
            onClick={() => handleDeleteTodo(todo.id)}
          />
        </li>
      </ul>
    </>
  );
};

export default Todos;

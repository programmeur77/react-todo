import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const Todos = ({ todo, handleIsCompleted, handleDeleteTodo }) => {
    return (
      <>
        <ul className="todo-list__list">
        <li
          className="todo-list__item"
          key={todo.id}
          onClick={() => handleIsCompleted(todo)}
        >
          <FaRegCircle
            className="todolist__item-circle"
            onClick={() => handleIsCompleted(todo)}
          />
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

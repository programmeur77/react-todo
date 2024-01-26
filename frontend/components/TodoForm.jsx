/** 
 @description This file contains the implementations of the form which aims at adding Todos
 @author Benoît Puech
 @copyright 2024
 @license Free to use and modify
 @version 1.0.0
 ----------------------------------------------------------------
 LAST UPDATE : 2024 / 01 / 26
*/
import "./../style/components/todo-form.scss";

const TodoForm = ({ newItem, handleOnChange, handleSubmit }) => {
  return (
    <form action="POST" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="new-item"
        className="todo-form__input"
        autoFocus
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <button className="todo-form__submit-btn" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;

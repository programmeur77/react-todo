import "../src/style.form.css";

const TodoForm = ({ newItem, handleOnChange, handleSubmit }) => {
  return (
    <form action="POST" className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="New item" className="todo-form__input-label">
        New item
      </label>
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

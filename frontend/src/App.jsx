import { useEffect, useState } from "react";
import Task from "./../components/Task";
import Header from "./../components/Header";

const App = () => {
  const [todos, setTodos] = useState([]);

  const setTodosAndSave = (todos) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    localStorage.getItem("todos") &&
      setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  return (
    <>
      <Header />
      <div className="todo-list-container">
        <Task todos={todos} setTodosAndSave={setTodosAndSave} />
      </div>
    </>
  );
};

export default App;

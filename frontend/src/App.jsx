import { useEffect, useState } from "react";

import "./index.css";
import Task from "./../components/Task";

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

  return <Task todos={todos} setTodosAndSave={setTodosAndSave} />;
};

export default App;

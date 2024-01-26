import { useEffect, useState } from "react";
import Task from "./../components/Task";
import Header from "./../components/Header";

import "./../style/components/app.scss";

const DOCUMENT_TITLE = "Todo App";

const App = () => {
  const [todos, setTodos] = useState([]);

  const setTodosAndSave = (todos) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    document.title = DOCUMENT_TITLE;

    localStorage.getItem("todos") &&
      setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  return (
    <>
      <div className="page-container">
        <Header />
        <div className="todo-list-container">
          <Task todos={todos} setTodosAndSave={setTodosAndSave} />
        </div>
      </div>
    </>
  );
};

export default App;

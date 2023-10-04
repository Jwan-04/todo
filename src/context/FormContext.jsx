import { createContext, useEffect, useContext, useState } from "react";

const todoContext = createContext();

export function TodoProvider({ children }) {
  const context = useTodo();

  return (
    <todoContext.Provider value={context}>{children}</todoContext.Provider>
  );
}

async function get_todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

async function add_todo(title) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}

function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    get_todos().then(setTodos);
  }, []);

  const addTodo = async (task) => {
    const newTodo = await add_todo(task);
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
  };
}

export function useTodoContext() {
  const context = useContext(todoContext);
  return context;
}

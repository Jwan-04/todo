import { useState } from "react";
import { useTodoContext } from "../context/FormContext";

export const TodoForm = () => {
  const context = useTodoContext();
  const [todo, setTodo] = useState("");
  const setData = (e) => {
    e.preventDefault();
    context.addTodo(todo);
    setTodo("");
    console.log(context.todos);
  };
  return (
    <>
      <div className="container text-center flex flex-col text-gray-100">
        <span className="text-4xl">TODO APP</span>
        <span>A Simple React Project</span>
        <br />
        <form name="" onSubmit={setData}>
          <div className="relative">
            <input
              type="text"
              className="block border w-full rounded outline-none grow p-4 bg-transparent"
              placeholder="Add Task to Do"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            ></input>
            <button
              type="submit"
              className="absolute right-2 bottom-2 border bg-violet-800 rounded px-4 py-2"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

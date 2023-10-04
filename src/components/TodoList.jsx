import { useTodoContext } from "../context/FormContext";
import { IconTrash } from "@tabler/icons-react";

export const TodoList = () => {
  const context = useTodoContext();
  return (
    <>
      <div className="mt-5  w-full">
        <ul className="">
          {context.todos.map((todo) => (
            <li key={todo.id} className="rounded p-3 mt-1 flex bg-violet-400">
              <span className="w-3/4 grow ">{todo.title}</span>
              <button
                onClick={() => {
                  context.deleteTodo(todo.id);
                }}
              >
                <IconTrash className="w-full align-middle h-6" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

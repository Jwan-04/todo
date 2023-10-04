import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/FormContext";
function App() {
  return (
    <>
      <TodoProvider>
        <div className="w-2/4 rounded flex-col justify-center flex mt-11 bg-violet-600 p-11">
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;

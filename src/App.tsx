import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { addTodo, removeTodo } from "./Features/todoSlice";
import TodoItem from "./Components/TodoItem";

function App() {
  const [input, setInput] = useState<string>("");

  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-neutral-100 dark:bg-slate-800">
        <div className="h-3/4 w-1/3 rounded-2xl bg-white shadow-lg dark:bg-slate-900">
          <form
            className="mx-auto mt-4 flex h-16 w-3/4 items-center justify-center rounded-full border-2 border-indigo-500 dark:border-sky-800 dark:text-neutral-400"
            onSubmit={handleAddTodo}
          >
            <input
              type="text"
              className="h-full w-[calc(100%-6rem)] rounded-l-[28px] bg-transparent pl-2.5"
              value={input}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
            <button
              type="submit"
              className="h-full w-24 rounded-r-[28px] bg-indigo-500 dark:bg-sky-800"
            >
              ADD
            </button>
          </form>

          {todos.map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              onCheck={handleDeleteTodo}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { addTodo, setCompleted } from "./Features/todoSlice";
import TodoItem from "./Components/TodoItem";

function App() {
  const [input, setInput] = useState<string>("");
  const [isCompletedView, setIsCompletedView] = useState<boolean>(false);

  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const handleCompletedTodo = (id: number) => {
    dispatch(setCompleted(id));
  };

  return (
    <>
      <h1 className="fixed right-[calc(50%-7.5rem)] top-10 w-60 text-center text-7xl text-indigo-500 underline">
        Todos
      </h1>
      <div className="flex h-screen w-screen items-center justify-center bg-neutral-100 dark:bg-slate-800">
        <div className="h-3/4 w-1/3 rounded-2xl bg-white shadow-lg dark:bg-slate-900">
          <form
            className="mx-auto mt-4 flex h-16 w-3/4 items-center justify-center rounded-full border-2 border-indigo-500 drop-shadow-lg dark:text-neutral-400"
            onSubmit={handleAddTodo}
          >
            <input
              type="text"
              className="h-full w-[calc(100%-6rem)] rounded-l-[28px] bg-transparent pl-2.5 focus-within:outline-none"
              value={input}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
            <button
              type="submit"
              className="h-full w-24 rounded-r-[28px] bg-indigo-500"
            >
              ADD
            </button>
          </form>
          <ul className="mt-5 flex w-full">
            <li
              className={
                "w-1/2 cursor-pointer border-b-4 text-center text-3xl " +
                (isCompletedView
                  ? "border-black hover:border-indigo-500 hover:text-indigo-500 dark:border-neutral-400 dark:text-neutral-400"
                  : "border-indigo-500 text-indigo-500")
              }
              onClick={() => setIsCompletedView(false)}
            >
              Active
            </li>
            <li
              className={
                "w-1/2 cursor-pointer border-b-4 text-center text-3xl " +
                (isCompletedView
                  ? "border-indigo-500 text-indigo-500"
                  : "border-black hover:border-indigo-500 hover:text-indigo-500 dark:border-neutral-400 dark:text-neutral-400")
              }
              onClick={() => setIsCompletedView(true)}
            >
              Completed
            </li>
          </ul>
          {/* filtering the lists to give the active and completed could be
          defined outside of the render but with this small a level of data I
          didn't feel it was needed. */}
          <ul className="mx-auto my-5 w-3/4 list-disc">
            {isCompletedView
              ? todos
                  .filter((todo) => todo.completed == true)
                  .map((todo) => (
                    <TodoItem
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      onCheck={handleCompletedTodo}
                      key={todo.id}
                    />
                  ))
              : todos
                  .filter((todo) => todo.completed == false)
                  .map((todo) => (
                    <TodoItem
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      onCheck={handleCompletedTodo}
                      key={todo.id}
                    />
                  ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

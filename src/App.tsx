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
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} onCheck={handleDeleteTodo} />
      ))}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;

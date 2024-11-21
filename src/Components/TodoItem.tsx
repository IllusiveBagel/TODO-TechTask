interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onCheck: Function;
}

const TodoItem = ({ id, title, completed, onCheck }: TodoItemProps) => {
  return (
    <li
      className={
        "flex items-center justify-between text-3xl dark:text-neutral-400 " +
        (completed ? "line-through" : "hover:text-indigo-500")
      }
      onClick={() => onCheck(id)}
    >
      <label>• {title}</label>
      {/* With more time I would want to make this look nicer */}
      <input
        type="checkbox"
        checked={completed}
        value=""
        className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
    </li>
  );
};

export default TodoItem;

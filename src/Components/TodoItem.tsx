interface TodoItemProps {
  id: number;
  title: string;
  onCheck: Function;
}

const TodoItem = ({ id, title, onCheck }: TodoItemProps) => {
  const deleteTodo = () => {
    onCheck(id);
  };

  return (
    <div className="dark:text-neutral-400" onClick={deleteTodo}>
      <label>{title}</label>
    </div>
  );
};

export default TodoItem;

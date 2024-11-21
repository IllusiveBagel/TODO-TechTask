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
    <div className="w-16" onClick={deleteTodo}>
      <label>{title}</label>
    </div>
  );
};

export default TodoItem;

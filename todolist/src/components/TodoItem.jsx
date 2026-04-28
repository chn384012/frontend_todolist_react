function TodoItem({ text, priority, createdAt }) {
  return (
    <li className="todo-item">
      <div className="todo-info">
        <span className="priority">[{priority}]</span>
        <strong className="text">{text}</strong>
      </div>
      <span className="date">{createdAt}</span>
    </li>
  );
}

export default TodoItem;

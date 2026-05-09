function TodoItem({ id, text, priority, createdAt, done, onToggle }) {
  return (
    <li
      className={`todo-item ${priority} ${done ? "done" : ""}`}
      onClick={() => onToggle(id)} // 클릭 이벤트
    >
      <div className="todo-info">
        <span className="status-icon">{done ? "✅" : "⬜"}</span>
        <span className="priority">[{priority}]</span>
        <strong className={`text ${done ? "completed" : ""}`}>{text}</strong>
      </div>
      <span className="date">{createdAt}</span>
    </li>
  );
}

export default TodoItem;

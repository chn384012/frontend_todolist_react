// src/components/TodoItem.jsx
function TodoItem({ id, text, priority, done, onToggle }) {
  return (
    <li
      className={`todo-item ${priority} ${done ? "done" : ""}`}
      onClick={() => onToggle(id)}
    >
      <div className="todo-info">
        <span className="status-icon">{done ? "✅" : "⬜"}</span>
        <span className="priority">[{priority}]</span>
        <strong className={`text ${done ? "completed" : ""}`}>{text}</strong>
      </div>
    </li>
  );
}

export default TodoItem;

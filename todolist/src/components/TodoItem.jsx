function TodoItem({ text, priority, createdAt }) {
  return (
    /* {priority}가 추가 -> HIGH는 빨강, LOW는 초록 */
    <li className={`todo-item ${priority}`}>
      <div className="todo-info">
        <span className="priority">[{priority}]</span>
        <strong className="text">{text}</strong>
      </div>
      <span className="date">{createdAt}</span>
    </li>
  );
}

export default TodoItem;

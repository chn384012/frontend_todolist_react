function TodoItem({ text, priority, createdAt }) {
  return (
    /* priority 값(HIGH, MEDIUM, LOW)을 클래스 이름에 추가해서 색상을 구분합니다 */
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

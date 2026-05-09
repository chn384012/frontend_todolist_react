// src/components/TodoList.jsx
import TodoItem from "./TodoItem";

// onToggle 함수를 props로 추가로 받습니다.
function TodoList({ sectionTitle, todos, onToggle }) {
  return (
    <section className="todo-list">
      <h2>{sectionTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={onToggle} // TodoItem에 함수 전달
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;

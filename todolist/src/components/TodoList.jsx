import TodoItem from "./TodoItem";

function TodoList({ sectionTitle, todos }) {
  return (
    <section className="todo-list">
      <h2>{sectionTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            priority={todo.priority}
            createdAt={todo.createdAt}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;

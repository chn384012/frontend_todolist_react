import TodoList from "../components/TodoList";

function ActivePage({ todos, onTodoClick }) {
  return (
    <div className="page">
      <TodoList
        sectionTitle="미완료 할 일 목록"
        todos={todos}
        onToggle={onTodoClick}
      />
    </div>
  );
}

export default ActivePage;

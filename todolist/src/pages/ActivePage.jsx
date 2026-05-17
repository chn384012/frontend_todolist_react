import TodoList from "../components/TodoList";

function ActivePage({ todos, onTodoClick }) {
  return (
    <div className="page">
      {/* 기존 TodoList 컴포넌트 재사용 */}
      <TodoList
        sectionTitle="미완료 할 일 목록"
        todos={todos}
        onToggle={onTodoClick}
      />
    </div>
  );
}

export default ActivePage;

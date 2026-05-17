import TodoList from "../components/TodoList";
function CompletedPage({ todos, onTodoClick }) {
  // 기존 Todo 배열에서 완료된 Todo만 filter로 골라 완료 페이지에 보여줍니다.
  const completedTodos = todos.filter((todo) => todo.done);
  return (
    <TodoList
      sectionTitle="완료된 할 일"
      todos={completedTodos}
      onTodoClick={onTodoClick}
    />
  );
}
export default CompletedPage;

import { useState } from "react"; // 1. 상태 관리를 위해 useState 임포트
import "./App.css";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { initialTodos } from "./data/todos"; // 2. 파일 이름을 initialTodos로 가져오기

function App() {
  // 3. todos 데이터를 state로 선언 (이제 화면이 바뀔 준비가 됨)
  const [todos, setTodos] = useState(initialTodos);

  // 4. 클릭했을 때 완료 상태(done)를 반전시키는 함수
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // 5. todos 데이터와 함께 클릭 이벤트 함수(onToggle)를 자식에게 전달
  return (
    <div className="container">
      <TodoHeader title="7주차 TodoList 고도화" />
      <TodoList sectionTitle="오늘 할 일" todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default App;

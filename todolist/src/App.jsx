// src/App.jsx
import { useState, useRef } from "react"; // useRef는 ID 관리용
import { initialTodos } from "./data/todos";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // 데이터를 state로 관리 (Vite 서버 실행 시 초기값)
  const [todos, setTodos] = useState(initialTodos);

  // input창의 입력을 관리할 state
  const [inputValue, setInputValue] = useState("");

  // 새로운 Todo의 id를 위한 ref (초기값 5, 데이터가 추가될 때마다 1씩 증가)
  const nextId = useRef(5);

  // 클릭 시 'done' 토글 함수
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // 새로운 할 일 추가 함수
  const onInsert = () => {
    // 빈 값 방지 처리
    if (!inputValue.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }

    // 추가할 데이터 객체 생성
    const nextTodo = {
      id: nextId.current,
      text: inputValue,
      priority: "MEDIUM", // 기본 우선순위
      createdAt: new Date().toLocaleDateString(), // 오늘 날짜
      done: false, // 초기 상태는 미완료
    };

    // 기존 todos 배열 앞에 새 항목 추가 (불변성 유지)
    setTodos([nextTodo, ...todos]);

    // 3-4. [선택 구현] input 값 비우기
    setInputValue("");

    // 다음 항목을 위해 id 1 증가
    nextId.current += 1;
  };

  // 엔터키로도 추가 가능하게 하는 함수
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <div className="container">
      <TodoHeader title="My Todo List" />

      <div className="todo-insert">
        <input
          type="text"
          value={inputValue}
          // input 값을 state로 관리
          onChange={(e) => setInputValue(e.target.target.value)}
          onKeyDown={onKeyDown} // 엔터키 지원
          placeholder="오늘 할 일을 입력하고 Enter를 누르세요"
        />
        <button onClick={onInsert}>추가</button>
      </div>

      <TodoList
        sectionTitle="할 일 목록"
        todos={todos}
        onToggle={onToggle} // 토글 함수 전달
      />
    </div>
  );
}

export default App;

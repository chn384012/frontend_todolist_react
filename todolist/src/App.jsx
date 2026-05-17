// src/App.jsx
import { useState, useEffect, useRef } from "react";
import { initialTodos } from "./data/todos";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // [필수 구현 2] 페이지 최초 실행 시 localStorage에 저장된 데이터가 있으면 불러와서 초기값으로 사용
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  // [필수 구현 1] input에 입력한 값을 state로 관리
  const [inputValue, setInputValue] = useState("");

  // 새로운 Todo의 고유 ID 관리를 위한 ref
  const nextId = useRef(
    todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
  );

  // [필수 구현 2] useEffect를 사용해 todos가 변경될 때만 localStorage에 저장하고 콘솔 로그 남기기
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    // todos가 실제로 변경될 때만 실행되는지 확인하기 위한 콘솔 로그
    console.log(
      "localStorage 저장 코드 실행:",
      new Date().toLocaleTimeString(),
    );
  }, [todos]); // dependency 배열에 todos를 넣어 변경 시에만 실행 제어

  // 완료 토글 함수
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // [필수 구현 1] 추가 버튼 클릭 시 새로운 Todo를 리스트에 추가
  const onInsert = () => {
    // 구현 조건: 빈 값은 추가되지 않도록 처리 (공백 제거 후 검사)
    if (!inputValue.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }

    const nextTodo = {
      id: nextId.current,
      text: inputValue,
      priority: "MEDIUM",
      done: false,
    };

    setTodos([nextTodo, ...todos]);

    // 구현 조건: 추가 후 input 값 비우기
    setInputValue("");
    nextId.current += 1;
  };

  // 엔터키 입력 시에도 추가 기능 작동
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  // input 입력 시 실행되는 함수 (렌더링 확인용 콘솔 로그 포함)
  const onInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("현재 입력 중... (렌더링 발생)");
  };

  return (
    <div className="container">
      <TodoHeader title="My Todo List" />

      {/* 할 일 추가 기능 UI 영역 */}
      <div className="todo-insert">
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={onInsert}>추가</button>
      </div>

      <TodoList sectionTitle="할 일 목록" todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default App;

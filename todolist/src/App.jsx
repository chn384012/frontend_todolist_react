// src/App.jsx
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // 라우트 컴포넌트 임포트
import TodoHeader from "./components/TodoHeader";
import Navigation from "./components/Navigation"; // 실습에서 만든 메뉴판 컴포넌트
import { initialTodos } from "./data/todos";

// 페이지 컴포넌트 임포트
import TodosPage from "./pages/TodosPage";
import CompletedPage from "./pages/CompletedPage";
import ActivePage from "./pages/ActivePage"; // 미완료
import ApiPage from "./pages/ApiPage";

import "./App.css";

function App() {
  // [7주차 기능] localStorage 연동 및 State 관리
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  const nextId = useRef(
    todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 데이터 변경 함수들 (Props로 자식 페이지들에게 전달)
  const handleTodoClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleAddTodo = (text) => {
    const nextTodo = {
      id: nextId.current,
      text: text,
      priority: "MEDIUM",
      done: false,
    };
    setTodos([nextTodo, ...todos]);
    nextId.current += 1;
  };

  // 8주차 핵심: 주소에 매핑할 필터링 데이터 준비
  const completedTodos = todos.filter((todo) => todo.done); // 완료 목록
  const activeTodos = todos.filter((todo) => !todo.done); // 미완료 목록

  return (
    <div className="container">
      <TodoHeader title="My Todo List" />

      {/* 상단 (전체 / 완료 / 미완료 / API 시도) */}
      <Navigation />

      {/* 라우트 구성 */}
      <Routes>
        {/* 첫 접속 시 자동으로 /todos 주소로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/todos" replace />} />

        {/* 1. 전체 페이지 */}
        <Route
          path="/todos"
          element={
            <TodosPage
              todos={todos}
              onAddTodo={handleAddTodo}
              onTodoClick={handleTodoClick}
            />
          }
        />

        {/* 2. 완료 페이지 */}
        <Route
          path="/completed"
          element={
            <CompletedPage
              todos={completedTodos}
              onTodoClick={handleTodoClick}
            />
          }
        />

        {/* 3. 미완료 페이지 */}
        <Route
          path="/active"
          element={
            <ActivePage todos={activeTodos} onTodoClick={handleTodoClick} />
          }
        />

        {/* 4. API 요청 실습 페이지 */}
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </div>
  );
}

export default App;

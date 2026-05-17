import { NavLink } from "react-router-dom"; // [cite: 731]

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/todos">전체</NavLink> {/* [cite: 738] */}
      <NavLink to="/completed">완료</NavLink> {/* [cite: 739] */}
      <NavLink to="/active">미완료</NavLink> {/* 새로 추가 버튼 */}
      <NavLink to="/api">API 시도</NavLink> {/* [cite: 740] */}
    </nav>
  );
}

export default Navigation;

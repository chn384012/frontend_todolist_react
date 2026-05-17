import axios from "axios";
import { useEffect, useState } from "react";

function ApiPage() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const [isError, setIsError] = useState(false); // 에러 상태 관리
  const [posts, setPosts] = useState([]); //성공한 데이터를 담을 배열 state 추가

  useEffect(() => {
    const tryApiRequest = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
        );

        // 받아온 5개의 데이터
        setPosts(response.data);
      } catch {
        // 요청 실패 시 에러 상태를 true로 변경
        setIsError(true);
      } finally {
        // 성공하든 실패하든 요청이 끝나면 로딩 표시를 종료
        setIsLoading(false);
      }
    };
    tryApiRequest();
  }, []);

  // API 요청 중 Loading... 표시
  if (isLoading) {
    return <section className="api-status">Loading...</section>;
  }

  // 요청 실패 시 에러 메시지 표시
  if (isError) {
    return (
      <section className="api-status error">
        데이터를 불러오는 데 실패했습니다.
      </section>
    );
  }

  // API 요청 성공 시 데이터 목록 출력하기
  return (
    <div className="api-page">
      <h2>외부 API 데이터 목록</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiPage;

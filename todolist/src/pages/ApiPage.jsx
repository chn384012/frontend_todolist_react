import axios from "axios";
import { useEffect, useState } from "react";

function ApiPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const tryApiRequest = async () => {
      try {
        // 일부러 존재하지 않는 API 주소로 요청해서 실패 흐름을 확인합니다.
        await axios.get("https://example.invalid/todos");
      } catch {
        // 요청이 실패하면 실패 상태를 true로 바꿔 화면에 "실패"를 표시합니다.
        setIsError(true);
      } finally {
        // 요청이 끝나면 Loading... 표시를 종료합니다.
        setIsLoading(false);
      }
    };
    tryApiRequest();
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>실패</section>;
  }
  // API 성공 시에 뜰 문구
  // 이번 실습에서는 가짜 API 주소이므로 성공 불가함!!
  return <section>성공</section>;
}

export default ApiPage;

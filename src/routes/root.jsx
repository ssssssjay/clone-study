import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>원하는 프로젝트를 선택하세요</h1>
      <ul>
        <li>
          <Link to={"29cm/clothes"}>29cm</Link>
        </li>
        <li>요즘 IT</li>
        <li>Toss</li>
        <li>제주항공</li>
      </ul>
    </>
  );
}

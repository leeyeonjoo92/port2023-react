import React from "react";
import ReactDOM from "react-dom/client";
// 같은 폴더에있는 App 파일에서 App 컴포넌트 불러오기
import App from "./App";
import "./assets/scss/style.scss"

// createRoot() 메서드를 사용하여 렌더링하라 최상위 컨테이너 생성
// id가 root인 요소를 찾아 이 안에 렌더링함
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
    <App />
	</React.StrictMode>
);
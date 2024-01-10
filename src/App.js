// 리액트 라이브러리 불러오기
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

// App이라는 상수를 선언한 함수형 컴포넌트
// 화살표 함수 사용
const App = () => {
	// 함수형 컴포넌트에서 반환하는 jsx 요소
	// return 작성 후 컴포넌트를 호출했을때 반환할 내용 작성
	return (
		// BrowserRouter : 라우팅을 적용하기 위한 컴포넌트
		// App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있게 함
		// Routes : 라우트들을 정의하는 컨테이너
		// 각각의 Route 컴포넌트들을 내부에 정의하여 경로와 컴포넌트를 매핑
		// Route path 경로에서 element 컴포넌트를 렌더링함
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</BrowserRouter>
	)
};

// App 컴포넌트를 다른 파일에서 재사용할 수 있게 내보내기
export default App;
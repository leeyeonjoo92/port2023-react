import React from "react";
import Header from "../component/Header";
import Skip from "../component/Skip";
import Intro from "../component/Intro";
import Skill from "../component/Skill";
import Port from "../component/Port";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Main from "../component/Main";
import Site from "../component/Site";

// 컴포넌트들은 하나의 div 태그 안에 들어와 있어야함
// 쓸데없는 div가 싫으면 그냥 빈태그 <></>로 감싸도됨
const HomeView = () => {
	return (
		<div>
			<Skip />
			<Header />
			<Main>
				<Intro />
				<Skill />
				<Site />
				<Port />
				<Contact />
			</Main>
			<Footer />
		</div>
	)
}

export default HomeView;
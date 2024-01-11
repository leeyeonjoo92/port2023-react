import React, {useState} from "react";

const headerNav = [
	{
		title: "intro",
		url: "#intro"
	},
	{
		title: "skill",
		url: "#skill"
	},
	{
		title: "site",
		url: "#site"
	},
	{
		title: "portfolio",
		url: "#port"
	},
	{
		title: "contact",
		url: "#contact"
	}
];

// 리액트에서는 class 대신 className 사용
const Header = () => {
	// 모바일 토글메뉴를 위한 state
	// show : 변수값, setShow : 현재 상태값
	const [show, setShow] = useState(false);

	const toggleMenu = () => {
		// true면 false로 false면 true로 바뀌게
		// prevShow는 매개변수 -> 따로 선언없이 사용할 수 있음
		// 상태가 업데이트되면 현재 상태값(true 또는 false)을 prevShow로 받음
		// !prevShow 현재 상태값과 반대로 만들어줌
		setShow((prevShow) => !prevShow);
	}

	return (
		// role은 alt와 비슷한 역할이라고 보면됨
		// 입력하는 role이 정해져있음
		<header id="header" role="banner">
		<div className="header__inner">
			<div className="header__logo">
				<h1><a href="/">portfolio<em>React</em></a></h1>
			</div>
			{/* show가 true면 show를 붙이고 false면 아무것도 안붙임 */}
			<nav
				className={`header__nav ${show ? "show" : ""}`}
				role="navigation"
				aria-label="메인 메뉴"
			>
				<ul>
					{/* <li><a href="#intro">intro</a></li>
					<li><a href="#skill">skill</a></li>
					<li><a href="#site">site</a></li>
					<li><a href="#port">portfolio</a></li>
					<li><a href="#contact">contact</a></li> */}
					{/* headerNav 컴포넌트에서 nav로 배열을 받아와서 url, title 값넣기 */}
					{/* map의 index값을 key값으로 사용 */}
					{headerNav.map((nav, key) => (
						<li key={key}>
							<a href={nav.url}>{nav.title}</a>
						</li>
					))}
				</ul>
			</nav>
			{/* role이 페이지에 두번이상 사용될경우 */}
			{/* 고유한 레이블을 갖기위해 aria 사용 */}
			<div
				className="header__nav__mobile"
				id="headerToggle"
				aria-controls="primary-menu"
				aria-expanded={show ? "true" : "false"}
				role="button"
				tabIndex="0"
				onClick={toggleMenu}
			>
				<span></span>
			</div>
		</div>
	</header>
	);
};

export default Header;
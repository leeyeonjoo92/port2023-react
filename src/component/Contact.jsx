import React from "react";

import { contactText } from "../constants";

const Contact = () => {
	return (
		<section id="contact">
			<div className="contact__inner">
				<h2 className="contact__title">Contact</h2>
				<div className="contact__lines top" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
				<div className="contact__text">
					<div className="text">
						{contactText.map((contact, key) => (
							<div key={key}>
								{/* noopener : 보안 속성 (새로 열린 페이지가 원래페이지에 접근 권한 못갖게) */}
								{/* noreferrer : 개인정보 보호 (새로 열린 페이지가 어떤 사이트에서 링크클릭했는지 알수없게함) */}
								<a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.title}</a>
							</div>
						))}

						{/* <div>
							<a href="https://open.kakao.com/o/gM7YLzwf" target="_blank" rel="noopener noreferrer">KAKAO : Webstroyboy</a>
						</div>
						<div>
							<a href="mailto:webstoryboy@naver.com" target="_blank" rel="noopener noreferrer">mail : WEBSTORYBOY@NAVER.COM</a>
						</div> */}
					</div>
				</div>
				<div className="contact__lines bottom" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</div>
		</section>
	)
}

export default Contact;
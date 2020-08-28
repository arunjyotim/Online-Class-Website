import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; {year} | Created
					<span>
					</span>
					by <a href="https://www.linkedin.com/in/arun-jyoti-mondal-867a241b1/">Arun Jyoti Mondal</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

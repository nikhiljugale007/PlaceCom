import React from "react";
import Header from "./Header";
import "./Styles.css";
import image from "../Images/welcome2.svg";

const Home = () => {
	return (
		<div>
			<Header />
			<header class="hero">
				<img class="hero-img" src={image} />
				<h1 class="hero-heading">
					Welcome to PlaceCom <span class="heading-inverted"> 🎓</span>
				</h1>
			</header>{" "}
		</div>
	);
};

export default Home;

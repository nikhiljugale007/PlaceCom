import React from "react";
import Header from "./Header";
import Drive from "./Drive";
import "./Styles.css";
const AllDrives = () => {
	return (
		<div>
			<Header />
			<section class="section" style={{ marginBottom: "0" }}>
				<div class="container container-center">
					<h1>All Drives</h1>
					<p>See all companys placement drives.</p>
				</div>
			</section>
			<Drive />
			<Drive />
		</div>
	);
};

export default AllDrives;

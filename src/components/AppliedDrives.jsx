import React from "react";
import Header from "./Header";
import Drive from "./Drive";
import "./Styles.css";
const AppliedDrives = () => {
	return (
		<div>
			<Header />
			<section class="section" style={{ marginBottom: "0" }}>
				<div class="container container-center">
					<h1>Your applied Drives</h1>
					<p>Your applied drives will appear here</p>
				</div>
			</section>
			<Drive />
		</div>
	);
};

export default AppliedDrives;

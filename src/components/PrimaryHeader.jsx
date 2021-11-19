import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryHeader.css";
import kit_logo from "../Images/kit_logo.png";
const PrimaryHeader = () => {
	return (
		<div>
			<div class="header">
				<Link to="/" style={{ paddingTop: "0px" }}>
					<img className="company_logo" src={kit_logo} alt="logo" />
				</Link>
				<Link to="/" style={{ paddingTop: "30px" }}>
					Kolhapur Institute Of Technology's college of engineering{" "}
				</Link>
				<div class="header-right">
					<Link to="/signin">SignIn</Link>
					<Link to="/signup">SignUp</Link>
				</div>
			</div>
		</div>
	);
};

export default PrimaryHeader;

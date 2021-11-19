import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import kit_logo from "../Images/kit_logo.png";
export default function Header() {
	return (
		<div>
			<nav class="navigation container">
				{/* <div class="nav-brand">
					<Link class="link" to="/">
						<img className="nav-logo" src={kit_logo} alt="kit logo" />
					</Link>
					<Link class="link" to="/">
						Kolhapur Institute Of Technology's college of engineering
					</Link>
				</div> */}
				<li class="list-item-inline">
					<Link class="link" to="/alldrives">
						All Drives
					</Link>
				</li>
				<li class="list-item-inline">
					<Link class="link" to="/applieddrives">
						Your applied Drives
					</Link>
				</li>
				<li class="list-item-inline">
					<Link class="link" to="/resumebuilder">
						Resume Builder
					</Link>
				</li>
				<li class="list-item-inline">
					<Link class="link" to="/profile/123">
						Your Profile
					</Link>
				</li>
				{/* <ul class="list-non-bullet nav-pills">
					<li class="list-item-inline">
						<Link class="link" to="/">
							home
						</Link>
					</li>
					<li class="list-item-inline">
						<Link class="link" to="/signin">
							SignIn
						</Link>
					</li>
					<li class="list-item-inline">
						<Link class="link" to="/SignUP">
							SignUP
						</Link>
					</li>
				</ul> */}
			</nav>
		</div>
	);
}

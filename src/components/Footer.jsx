import React from "react";
import "./Styles.css";
const Footer = () => {
	return (
		<div>
			<footer class="footer">
				<div class="footer-header">social media presence</div>
				<ul class="social-links list-non-bullet">
					<li class="list-item-inline">
						<a class="link" href="https://github.com/neogcamp/">
							{" "}
							github{" "}
						</a>
					</li>
					<li class="list-item-inline">
						<a class="link" href="https://twitter.com/neogcamp">
							{" "}
							twitter{" "}
						</a>
					</li>
					<li class="list-item-inline">
						<a class="link" href="https://www.linkedin.com/company/neog-camp/">
							linkedin
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;

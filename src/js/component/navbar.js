import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-brand navbar-dark bg-dark mb-3 fixed-top d-flex justify-content-center">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
					className="img-fluid"
					alt="Responsive image"
					width="200"
					height="150"
				/>
			</Link>
		</nav>
	);
};

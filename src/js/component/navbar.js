import React from "react";
import { Link } from "react-router-dom";
import Logo from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/" className="logo d-flex align-items-center">
				<img src={Logo} className="logo-img"></img>
			</Link>
			<div className="dropdown">
				<button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites 
					{/* añadir el número que suma cuando se añade algo a la tienda */}
				</button>
				<ul className="dropdown-menu">
					<li><button className="dropdown-item" type="button">{ }</button></li>
				</ul>
			</div>
		</nav>
	);
};

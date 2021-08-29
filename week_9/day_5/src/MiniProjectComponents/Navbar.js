import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
			<nav className="nav-wrapper red darken-3">
				<div className="container">
					<Link className="brand-logo" to="/" >My Blog</Link>
					<ul className="right">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink exact to="/about">About</NavLink></li>
						<li><NavLink exact to="/contact">Contact</NavLink></li>
					</ul>
				</div>
			</nav>
	)
}
export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../abstract-creative-sun-logo.jpg';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="weather logo"/>
					</Link>
					<ul className="navbar-nav d-flex flex-row">
						<li className="nav-item me-3 me-lg-0">
							<NavLink className="nav-link" to="/">
								<i className="fas fa-cloud-sun    "></i>
							</NavLink>
						</li>
						<li className="nav-item me-3 me-lg-0">
							<NavLink className="nav-link" to="/favourites">
								<i className="fab fa-star    "></i>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;
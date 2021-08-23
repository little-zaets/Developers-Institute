import React from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import { Route, Link, Switch, NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	return (
		<h1>Home</h1>
	)
}
const Profile = () => {
	return (
		<h1>Profile</h1>
	)
}
const Shopping = () => {
    throw new Error('Not Found');
}
const XpEx3 = () => {
	return (
		<>
			<NavLink exact to="/">Home</NavLink> | 
			<NavLink to="/profile">Profile</NavLink> | 
			<NavLink to="/shop">Shopping</NavLink>
			<Switch>
				<Route exact path="/">
					<ErrorBoundary>
						<Home />
					</ErrorBoundary>
				</Route>
				<Route path="/profile">
					<ErrorBoundary>
						<Profile />
					</ErrorBoundary>
				</Route>
				<Route path="/shop">
					<ErrorBoundary>
						<Shopping />
					</ErrorBoundary>
				</Route>
			</Switch>
		</>
	)
}

export default XpEx3;
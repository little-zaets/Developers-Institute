import React from 'react';
import NavBar from './MiniProjectComponents/Navbar';
import Home from './MiniProjectComponents/Home';
import About from './MiniProjectComponents/About';
import Contact from './MiniProjectComponents/Contact';
import Post from './MiniProjectComponents/Post';
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends React.Component {
	render() {
		return (
				<div className="App">
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/:post_id" component={Post} />
					</Switch>
				</div>
		);
	}
}

export default App;

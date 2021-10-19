import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Main from './WeatherApp/components/Main';
import { Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/favourites" component={Favourites} />
					</Switch>
				</header>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Route exact path="/" component={Landing} />
					<Route exact path="/movie/:id" component={Movie} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;

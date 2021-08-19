import React, { Component } from 'react';
import FavouriteColor from './FavouriteColor';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		// this.shootRegular = this.shootRegular.bind(this);
		this.shootRegularWithParameter = this.shootRegularWithParameter.bind(this);
	}
	// Exercise 2 : OnClick
	shoot = () => {
		alert("Great Shot!");
	}

	shootRegular() {
		alert(this);
	}
	//Exercise 4 : Use .Bind To Pass Arguments To A Regular Function _ ES2015
	shootRegularWithParameter(x) {
		alert(x);
	}
	//Exercise 6 : This And Arrow Function
	shootTwo = () => {
		alert(this);
	}
	render() {
		return (
			<div className="App">
				{/* Ex1: Output the value in a header tag. */}
				<FavouriteColor />
				<br />
				{/* Ex2: Create a button with the text “Take the shot!”.
				This button will have an onClick event listener that calls the shoot function. */}
				<button type='button' onClick={this.shoot}>Take the Shot!</button>
				<br />
				{/* Exercise 3 : Regular Function And This Keyword _ ES2015 */}
				<button type='button' onClick={this.shootRegular}>Keep Shooting!</button>
				{/* Exercise 4 : Use .Bind To Pass Arguments To A Regular Function _ ES2015 */}
				<button type='button' onClick={this.shootRegularWithParameter.bind(this, 'Goal!')}>Shooting!</button>
				{/* Exercise 6 : This And Arrow Function */}
				<button type='button' onClick={this.shootTwo}>Keep On Shooting!</button>
			</div>
		);
	}
}
export default App;

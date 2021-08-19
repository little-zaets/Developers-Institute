//Exercise 1: ComponentDidMount
import React, { Component } from 'react';
//Create a Class component, containing a property favoriteColor in the state object. Set the value of the property to “red”.
class FavouriteColor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'red'
		}
	}
	componentDidMount() { 
    	setTimeout(() => {
      	this.setState({color: 'yellow'})
    	}, 5000)
	}
	changeColor = () => {
		this.setState({color: 'blue'})
	}
	render() {
		return (
			<div>
				<header>My favourite color is <i>{this.state.color}</i></header>
				{/* Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”. */}
				<header>My favourite color is <i>{this.state.color}</i></header>
				<button type='button' onClick={this.changeColor}>Change to Blue</button>
			</div>
		)
	}
}
export default FavouriteColor;
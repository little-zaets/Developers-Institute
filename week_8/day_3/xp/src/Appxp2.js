import React from 'react';
//Exercise 1 : Click Me
const clickHandler = () => {
	console.log("heeelllooooo")
	alert("I was clicked!"); 
}

class Appxp2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		}
	}
	//Exercise 2: OnKeyPress
	handleKeyPress = (event) => {
		let input = event.target.value;
		if (event.which === 13) {
			alert(`The Enter key was pressed, your input is: ${input}`)
		}
	}
	//Exercise 3 : Toggle
	handleToggle = () => {
		if (this.state.isToggleOn) {
			this.setState({ isToggleOn: false });
		}
		else {
			this.setState({ isToggleOn: true });
		}
	}
	//Exercise 4 : Form
	render() {
		let currentState = 'ON';
		if (this.state.isToggleOn) {
			currentState = 'ON';
		}
		else {
			currentState = 'OFF';
		}
		return (
			<div>
				{/*Ex1: Create a button with the text ‘Click Me!’ with an onClick event listener that calls the clickHandler function. Don’t use bind or this on the onClick event */}
				<button type='button' onClick={clickHandler}>Click Me!</button>
				{/*Ex2: Create an input tag that has an onKeyPress ek Me!</button>vent handler, that listens to a function called handleKeyPress.*/}
				<input type='text' onKeyPress={this.handleKeyPress} />
				{/*Ex3: Create a toggle button that has an onClick event that switches between ‘ON’ and ‘OFF’ */}
				<button type='button' onClick={this.handleToggle}>{currentState}</button>
			</div>
		)
	}
}
export default Appxp2;
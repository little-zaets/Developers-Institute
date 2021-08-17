import React from 'react';
import './MyComponent.css';
//Exercise 1: HTML Tags In React
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>This is a Header</h1>
				<p>This is a Paragraph</p>
				<a href="#">This is a Link</a>
				<h3>This is a Form:</h3>
				<label htmlFor="myForm">Enter your name: </label>
				<input type="text"></input><button type="submit">Submit</button>
			</div>
		)
	}
}
export default MyComponent;

//Exercise 2: Styling React Using CSS #1
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				In MyComponent, create a header tag and set its color to red.
				<h1 className='red'>Hello Style!</h1>
				Change the background color of the header tag to “lightblue”
				<h1 className='bg'>Hello Style!</h1>
			</div>
		)
	}
}
export default MyComponent;

//Create an object named mystyle that contains styling information for a header tag. Add the following properties to the object:
//Set the color to ‘white’
//Set the background color to ‘DodgerBlue’
//Set the padding to ‘10px’
//Set the font family to ‘Arial’
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<h1 style={
					{
						color: 'white',
						backgroundColor: 'dodgerblue',
						padding: '10px',
						fontFamily: 'Arial'
					}
				}>
					Hello Style!
				</h1>
			</div>
		)
	}
}
export default MyComponent;
// Create an object named mySuperStyles that contains styling information for a button tag. Add the following properties to the object:
// Set the color to ‘yellow’
// Set the size of the font to ‘16px’
// Set the weight of the font to ‘bold’
// Set the border to ‘1px solid yellow’
// Set the color of the background to black
// Set the padding to ‘5px’
// Set a border radius to ‘8px’
// Set a cursor to ‘pointer’
// Set a margin to ‘10px’
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<button style={
					{
						color: 'yellow',
						backgroundColor: 'dodgerblue',
						padding: '5px',
						fontFamily: 'Arial',
						fontSize: '16px',
						fontWeight: 'bold',
						backgroundColor: 'black',
						border: '1px solid yellow',
						borderRadius: '8px',
						cursor: 'pointer',
						margin: '10px'
					}
				}>
					I'm a Stylish Button!
				</button>
			</div>
		)
	}
}
export default MyComponent;

//Exercise 3: Styling React Using CSS #2
// Create a new css file named MyComponent.css and import it in your App component.
// Add the following CSS properties to the CSS file, and apply them to a header tag:
// .newStyle {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<h1 className='newStyle'>Hello Style!</h1>
			</div>
		)
	}
}
export default MyComponent;
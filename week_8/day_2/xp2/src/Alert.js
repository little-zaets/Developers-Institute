import React from 'react';

//Exercise 1: Alert 
//Based on the knowledge that you now have, 
//create an < Alert /> component that renders a Bootstrap alert.
// function Alert(props) {
// 	console.log(props)
// 	return (
// 		<div className="alert alert-danger" role="alert">
// 			{props.text}
// 		</div>
// 	);
// }

// export default Alert;

//Exercise 2: Conditional Rendering
//Improve the <Alert /> component of the previous exercise:
//The component now receives two properties:
//show (boolean): True or false.
//text (string): The message to include inside the alert message
// function Alert({text, show}) {
// 	if (show === 'false') {
// 		return null;
// 	}
// 	else {
// 		return (
// 			<div className="alert alert-danger" role="alert">
// 				{text}
// 			</div>
// 		);
// 	}
// }
// export default Alert;

//Exercise 3: Smart Alert
//Improve the <Alert /> component of the previous exercise:
//The component receives these two properties:
//text (string): The text content that will be displayed on the alert.
//color (string): Red or Orange.
// function Alert({text, color}) {
// 	if (color === 'Red') {
// 		return (
// 			<div className="alert alert-danger" role="alert">
// 				{text}
// 			</div>
// 		);
// 	}
// 	else if (color === 'Orange') {
// 		return (
// 			<div className="alert alert-warning" role="alert">
// 				{text}
// 			</div>
// 		);
// 	}
// }
// export default Alert;
//Exercise 4: More Alert Colors
//Create an object named colorClasses in your function:
//the property name (ie. the key) represents the color of the alert,
//the property value represents the Bootstrap class you will pass to the div tag.
function Alert({text, color}) {
	const colorClasses = {
    	red: 'alert-danger',
    	orange: 'alert-warning',
    	green: 'alert-success'
	};
	if (typeof colorClasses[color] == 'undefined') {
		return (
			<>
				{alert(`The color ${color} is not in the list`)}
			</>
		)
	}
	else {
		return (
			<div className={`alert ${colorClasses[color]}`} role="alert">
				{text}
			</div>
		);
	}
}
export default Alert;
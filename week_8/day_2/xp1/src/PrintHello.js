//Exercise 1: Function & JSX
//n the App.js file, create a function named PrintHello that returns <h1>I Love React</h1> .
import React from 'react';
let h1 = <h1>I Love React</h1>
const PrintHello = () => {
	return (
		h1
	)
}

export default PrintHello;
//The PrintHello function should now return <h1>I'm a React Component</h1>;
//Call the PrintHello function as a React component to display the content.
h1 = <h1>I Love React Component</h1>;
class PrintHello extends React.Component {
	render() {
		return (
			h1
		)
	}
	
}
export default PrintHello;
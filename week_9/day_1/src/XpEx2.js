import React from 'react';
import User from './Components/Form';
import Data from './Components/Data';
import './App.css';


class XpEx2 extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			display: false
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.setState({ display: true });
	}
	handleReset = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.setState({ firstName: '', lastName: '', phone: '', email: '', display: false });
	}
	
	render() {
		const displayControl = this.state.display;
		console.log(this.state);
		return (
			<>
				{displayControl 
					? <Data result={this.state} handleReset={this.handleReset} handleChange={this.handleChange} />
					: <User result={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleReset={this.handleReset}/>

				}
			</>
		)
	}
}
export default XpEx2;
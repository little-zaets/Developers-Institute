import React from 'react';
import './App.css';

class XpEx1 extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			author: '',
			genre: '',
			year: '',
			success: false
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
		this.setState({ success: true });
	}
	render() {
		return (
			<>
				<h1>New Book</h1>
				{this.state.success && <div>data sent!</div>}<br />
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">Title: </label>
					<input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br /><br />
					<label htmlFor="author">Author: </label>
					<input type="text" name="author" value={this.state.author} onChange={this.handleChange} /><br /><br />
					<label htmlFor="genre">Genre: </label>
					<input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} /><br /><br />
					<label htmlFor="year">Year Published: </label>
					<input type="text" name="year" value={this.state.year} onChange={this.handleChange} /><br /><br />
					<button type="submit">Submit</button>
				</form>
			</>
		)
	}
}

export default XpEx1;

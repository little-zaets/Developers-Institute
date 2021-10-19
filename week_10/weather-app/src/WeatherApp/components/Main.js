import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Main extends Component {
	render() {
		console.log(this.props)
		const { loading } = this.props;
		return (
			<div className="container">
			
			</div>
		)
	}
}
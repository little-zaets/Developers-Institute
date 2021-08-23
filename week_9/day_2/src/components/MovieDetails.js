import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ selection }) => {
	if (selection) {
		return (
			<div className="details-container">
				<h2>Your Selection: </h2>
				<div className="specs">
					<p>Title: {selection.title}</p>
					<p>Release Date: {selection.releaseDate}</p>
					<p>Rating: {selection.rating}</p>
				</div>
			</div>
		)
	}
	else {
		return (
			<div className="details-container" style={{width: '70%'}}>
				<h2>Movie</h2>
				<div className="specs">
					<p>Select a Movie</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selection: state.selection
	}
}

export default connect(mapStateToProps)(MovieDetails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, fetchLocationKey, fetchSelectedCity } from '../redux/actions';

export class SearchForm extends Component {
	onSubmit = async(event) => {
		event.preventDefault()
			.then(this.props.fetchLocationKey(this.props.text))
			.then(this.props.setLoading())
		.then(this.props.)
	};
	render() {
		console.log(this.props)
		return (
			<div className="jumbotron jumbotron-fluid mt-5 text-center">
				<div className="container">
					<h1 className="display-4 mb-3">
						<i className="fa fa-search" /> Search Weather by City
					</h1>
					<form id="searchForm" onSubmit={onSubmit}>
						<input
							type="text"
							className="form-control"
							name="searchText"
							placeholder="Search for a City..."
							onChange={onInputChange}
						/>
						<button type="submit" className="btn btn-secondary btn-bg mt-3">
							Search
					</button>
					</form>
				</div>
			</div>
		)
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onInputChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

import React from 'react';
import { connect } from 'react-redux';
import CardList from './dailychallenge/components/CardList';
import SearchBox from './dailychallenge/components/SearchField';
import { fetchRobots } from './dailychallenge/actions';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		// this.state = {
		//   robots: [],
		//   searchField: ''
		// }
	}
	componentDidMount(props) {
		console.log(props)
		this.props.loadRobots()
	}
	handleChange = (e) => {
		const { searchField } = this.state;
		this.setState({ searchField: e.target.value })
		// this.inputText = e.target.value;
	}
	render() {
		//   const { robots, searchField } = this.state;
		const { searchField, robots } = this.props;
		console.log(searchField);
		const filterRobots = robots.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return (
			<div className="tc">
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox onInputChange={this.handleChange} />
				<CardList robots={filterRobots} />
			</div>
		);
	}
}
	const mapStateToProps = (state) => {
		return {
			searchField: state.searchField,
			robots: state.robots
		}
	}
	const mapDispatchToProps = (dispatch) => {
		return {
			loadRobots: () => dispatch(fetchRobots())
		}
	}
export default connect(mapStateToProps, mapDispatchToProps)(App);

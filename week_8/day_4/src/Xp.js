import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class BuggyCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		let { counter } = this.state;
		this.setState({counter: ++counter})
	}
	render() {
		if (this.state.counter === 5) {
			throw new Error("I crashed!");
		}
		return (
			<h1 onClick={this.handleClick}>{this.state.counter}</h1>
		)
	}
}

function Xp() {
	return (
		<div>
			<p>
        		<b>
          			Click on the numbers to increase the counters.<br />
          			The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
        		</b>
      		</p>
			<hr />
			{/* Simulation 1 */}
			<p>
				These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
			</p>
			<ErrorBoundary >
				<BuggyCounter />
				<BuggyCounter />
			</ErrorBoundary>
			<hr />
			{/* Simulation 2 */}
			<p>
				These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.
			</p>
			<ErrorBoundary>
				<BuggyCounter />
			</ErrorBoundary>
			<ErrorBoundary>
				<BuggyCounter />
			</ErrorBoundary>
			<hr />
			{/* Simulation 3 */}
			<BuggyCounter />
		</div>
	)
}
export default Xp;

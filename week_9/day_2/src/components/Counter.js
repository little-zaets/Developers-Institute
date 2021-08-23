import React from 'react';
import { connect } from 'react-redux';
import { plusOne, minusOne } from '../actions/index';

class Counter extends React.Component {
	render() {
		const {counter,plusOne,minusOne} = this.props
    	return (
      		<div className="App">
       			<header className="App-header">
					<button onClick={plusOne}>+</button>
					{counter}
          			<button onClick={minusOne}>-</button>
        		</header>
      		</div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
//dispatcher is basically a handler function - dispatches to the action, the action goes to the reducer, then reducer changes the initial state
const mapDispatchToProps = (dispatch) => {
  return {
    plusOne: () => dispatch(plusOne()),
    minusOne: () => dispatch(minusOne())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

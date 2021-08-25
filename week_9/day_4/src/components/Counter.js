import { connect } from 'react-redux';
import {increment, decrement} from '../redux/actions'
const Counter = (props) => {
	let { increment, decrement , counter } = props;
	const incrementIfOdd = () => {
		if (counter % 2) {
			increment();
		}
	}
	const incrementAsync = () => {
		setTimeout(() => {
			increment();
		}, 1000)
	}
	return (
		<div>
			<p>Clicked: {counter} times</p>
			<button onClick={increment}> + </button>
			<button onClick={decrement}> - </button>
			<br/>
			<button onClick={incrementIfOdd}> Increment If Odd </button>
			<button onClick={incrementAsync}> Increment Async </button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()) //callback function prevents function call from automatically invoking 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//if there was data/input value, you put the payload in the brackets
export const increment = () => {
	return {
		type: 'INCREMENT'
	}	
}
export const decrement = () => {
	return {
		type: 'DECREMENT'
	}	
}



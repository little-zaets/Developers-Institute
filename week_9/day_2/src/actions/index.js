export const INCREASE_ONE = 'INCREASE_ONE';
export const DECREASE_ONE = 'DECREASE_ONE';

//payload is what will affect the state 

export const plusOne = () => {
	return {
		type: INCREASE_ONE
	}
}

export const minusOne = () => {
	return {
		type: DECREASE_ONE
	}
}
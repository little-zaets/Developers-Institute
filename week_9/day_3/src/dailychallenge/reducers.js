import { CHANGE_SEARCH_FIELD, ROBOTS } from './actions';

let initState = {
	searchField: '',
	robots:[]
}

export const reducer = (state = initState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		case ROBOTS:
			return { ...state, robots: action.payload };
		default:
			return { ...state };
	}
}
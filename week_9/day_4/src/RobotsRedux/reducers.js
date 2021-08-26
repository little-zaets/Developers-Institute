import { CHANGE_SEARCH_FIELD, ROBOTS, LOADING, FAILED } from './actions';

let initSearchState = {
	searchField: ''

}
let initRobotState = {
	robots: [],
	isLoading: false
}

export const searchRobots = (state = initSearchState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		default:
			return { ...state };
	}
}
export const requestRobots = (state = initRobotState, action = {}) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: true }
		case ROBOTS:
			return { ...state, robots: action.payload, isLoading: false };
		case FAILED:
			return { ...state, error: action.payload, isLoading: false }
		default:
			return { ...state }
	}
}
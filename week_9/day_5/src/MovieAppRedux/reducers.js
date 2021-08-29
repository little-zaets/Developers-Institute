import { SEARCH, LOAD_SEARCH_RESULTS, LOAD_SELECTED_MOVIE, LOADING, FAILED } from './actions';

const initState = {
	text: '',
  	movies: [],
  	loading: false,
  	movie: []
}

export const rootReducer = (state = initState, action = {}) => {
	switch (action.type) {
		case SEARCH:
			return { ...state, text: action.payload, loading: false }
		case LOADING:
			return { ...state, loading: true }
		case LOAD_SEARCH_RESULTS:
			return { ...state, movies: action.payload, loading: false }
		case LOAD_SELECTED_MOVIE:
			return { ...state, movie: action.payload, loading: false } 
		case FAILED:
			return { ...state, error: action.payload, loading: false }
		default:
			return { ...state }
	}
}
import { SEARCH, GET_SEARCH_RESULTS, GET_CITY, LOADING, FAILED } from './constants';

const initState = {
  text: '',
  locationResults: [],
  isLoading: false,
  city: []
};

export const rootReducer = (state = initState, action = {}) => {
	switch (action.type) {
		case SEARCH:
			return { ...state, text: action.payload, isLoading: false }
		case LOADING:
			return { ...state, isLoading: true }
		case GET_SEARCH_RESULTS:
			return { ...state, locationResults: action.payload, isLoading: false }
		case GET_CITY:
			return { ...state, city: action.payload, isLoading: false } 
		case FAILED:
			return { ...state, error: action.payload, isLoading: false }
		default:
			return { ...state }
	}
}
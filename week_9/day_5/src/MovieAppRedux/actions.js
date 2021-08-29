import axios from 'axios';
import { SEARCH, LOAD_SEARCH_RESULTS, LOAD_SELECTED_MOVIE, LOADING, FAILED } from './constants';


export const setSearchField = (text) => (dispatch) => {
	dispatch({ type: SEARCH, payload: text })//payload sends the data to the reducer
}
const APIKey = 'f55e92e7';
export const fetchMovies = (text) => (dispatch) => {
	dispatch({ type: LOADING });
	fetch(`https://www.omdbapi.com/?apikey=${APIKey}&i=${text}`)
		.then(res => res.json())
		.then(data => {
			dispatch({ type: LOAD_SEARCH_RESULTS, payload: data.data })
		})
		.catch(error => {
			console.log(error => dispatch({ type: FAILED, payload: error })) 
	})
}
export const fetchSelectedMovie = (id) => (dispatch) => {
	dispatch({ type: LOADING });
	fetch(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
		.then(res => res.json())
		.then(data => {
			dispatch({ type: LOAD_SELECTED_MOVIE, payload: data.data })
		})
		.catch(error => {
			console.log(error => dispatch({ type: FAILED, payload: error })) 
	})
}
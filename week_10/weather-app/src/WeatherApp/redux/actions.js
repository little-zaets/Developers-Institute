import { GET_CITY, GET_SEARCH_RESULTS } from "./constants";


export const setSearchField = (text) => (dispatch) => {
	dispatch({ type: SEARCH, payload: text })//payload sends the data to the reducer
}
const APIKey = 'wc2ONIlbREJ4MNyf8tArgwdfixSyWnc7';
export const fetchLocationKey = (text) => (dispatch) => {
	dispatch({ type: LOADING });
	const key = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKey}&q=${text}&language=en-us`)
		.then(res => res.json())
		.then(data => console.log(data))
		.then(data => {
			dispatch({ type: GET_SEARCH_RESULTS, payload: data })
		})
		.then(data => { return data.Key })
	.catch(error => {
			console.log(error => dispatch({ type: FAILED, payload: error })) 
	})
	return key;
}

export const fetchCityWeather = (key) => (dispatch) => {
	dispatch({ type: LOADING });
	fetch(`http://dataservice.accuweather.com/locations/v1/(${key})?apikey=${APIKey}&language=en-us`)
		.then(res => res.json())
		.then(data => {
			dispatch({ type: GET_CITY, payload: data })
		})
		.catch(error => {
			console.log(error => dispatch({ type: FAILED, payload: error })) 
	})
}

export const setLoading = () => {
  	return {
    	type: LOADING
  	}
}
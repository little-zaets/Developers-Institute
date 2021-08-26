export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const ROBOTS = 'ROBOTS';
export const LOADING = 'LOADING';
export const FAILED = 'FAILED';

export const setSearchField = (text) => ({
	type: 'CHANGE_SEARCH_FIELD',
	payload: text //payload sends the data to the reducer
})

export const fetchRobots = () => (dispatch) => {
	dispatch({ type: LOADING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			dispatch({ type: ROBOTS, payload: data })
		})
		.catch(error => {
			console.log(error => dispatch({ type: FAILED, payload: error })) 
	})
}
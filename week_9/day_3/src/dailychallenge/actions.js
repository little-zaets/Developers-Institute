export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const ROBOTS = 'ROBOTS';

export const setSearchField = (text) => ({
	type: 'CHANGE_SEARCH_FIELD',
	payload: text //payload sends the data to the reducer
})

export const fetchRobots = () => (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			dispatch({type: ROBOTS, payload:data})
		})
		.catch(e => {
		console.log(e)
	})
}
export const selectFilm = (film) => {
	return {
		type: 'MOVIE_SELECTED',
		payload: film
	}
}
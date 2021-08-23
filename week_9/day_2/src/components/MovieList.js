import React from 'react';
import { connect } from 'react-redux';
import  MovieDetails  from './MovieDetails';
import { selectFilm } from '../actions/DcActions';

const MovieList = ({films, selectFilm}) => {
	const list = films.map((film) => {
		 return (
            <div key={film.title}>
                <span>{film.title}</span>
                <button onClick={() => selectFilm(film)}>Details</button>
            </div>
        )         
	})
	return (
		<div className="list">
			<h2>Movies</h2>
                <ul>
                	{ list } 
                </ul>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}
const mapDispatchToProps = {
	selectFilm
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
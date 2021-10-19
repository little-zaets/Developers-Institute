import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
	console.log(props)
	const { movieInfo } = props;
	console.log(movieInfo)
	const { image, title, year, id } = movieInfo;
	return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={image} alt="Movie Poster" />
          <h5 className="text-light card-title">
            {title} - {year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + id}>
            Movie Details
            <i className="fas fa-chevron-right    " />
          </Link>
        </div>
      </div>
    );
}

export default MovieCard;
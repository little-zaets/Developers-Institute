import React, {Component} from 'react';
// import { connect } from 'react-redux';
import  MovieList  from './components/MovieList';
import MovieDetails from './components/MovieDetails';

class DailyChallenge extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default DailyChallenge;
import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMovieById, getSimilarMovies} from "../../actions/movies_action";
import Description from "./Description";
import SimilarMovies from "./SimilarMovies";

class MovieOverview extends Component {
  componentDidMount() {
    const { getMovieById, getSimilarMovies, match } = this.props;
    const movieId = match.params.movieId;
    const API_KEY = "api_key=6fdbf3d8cc8d2a408d0252860c4a972e";

    getMovieById(`https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}&language=en-US`);
    getSimilarMovies(`https://api.themoviedb.org/3/movie/${movieId}/similar?${API_KEY}&language=en-US&page=1`)
  }

  render() {
    const { movieById, similarMovies, isLoading } = this.props;

    return (
      <div className="movie-overview">
        {isLoading ? "Loading..." : <Description movie={movieById}/>}
        {isLoading ? "Loading..." : <SimilarMovies movies={similarMovies}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.isLoading,
    movieById: state.movies.movieById,
    similarMovies: state.movies.similarMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieById: url => dispatch(getMovieById(url)),
    getSimilarMovies: url => dispatch(getSimilarMovies(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieOverview)
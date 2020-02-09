import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getMovieById } from "../../actions/movies_action";
import Description from "./Description";
import SimilarMovies from "./SimilarMovies";
import Loader from "../Loader";

function MovieOverview ({match, getMovieById, movieById, similarMovies, isLoaded}) {
  useEffect(() => {
    const movieId = match.params.movieId;
    console.log(similarMovies.length)

    getMovieById(`${movieId}`);
  }, []);

    return (
      <div className="movie-overview">
        {isLoaded ? <Description movie={movieById}/> : <Loader/>}
        {similarMovies.results.length === 0 ? '' : <SimilarMovies movies={similarMovies}/>}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    isLoaded: state.movies.isLoaded,
    movieById: state.movies.movieById,
    similarMovies: state.movies.similarMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieById: url => dispatch(getMovieById(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieOverview)
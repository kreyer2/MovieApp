import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMovieById} from "../../../actions/movies_action";

function Movie ({poster_path, title, id}) {
    return (
      <a href={`/about/${id}`} className="movie-wrapper" >
        <img className="movie-image"
             src={`https://image.tmdb.org/t/p/original${poster_path}`}
             alt={title}/>
        <div className="movie-name">
          {title}
        </div>
      </a>
    );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieById: url => dispatch(getMovieById(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie)

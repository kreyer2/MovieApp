import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getMovieById} from "../../../actions/movies_action";

class Movie extends Component {
  render() {
    const { poster_path, title, id } = this.props;

    return (
      <Link to={`/about/${id}`} className="movie-wrapper" >
        <img className="movie-image"
             src={`https://image.tmdb.org/t/p/original${poster_path}`}
             alt={title}/>
        <div className="movie-name">
          {title}
        </div>
      </Link>
    );
  }
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

import React, { Component } from 'react';
import Movie from "./Movie";
import { connect } from "react-redux";
import {getMovies} from "../../../actions/movies_action";
import lodash from 'lodash';
import {withRouter} from 'react-router-dom'
import Paginator from "../../Paginator/Paginator";


class MovieList extends Component {
  componentDidMount() {
    const { getMovies, match } = this.props;
    const API_KEY = "api_key=6fdbf3d8cc8d2a408d0252860c4a972e";

    getMovies(`https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=${match.url.length > 1 ? match.params.number : 1}`);
  }

render() {
  const { movies, isLoading } = this.props;

  return (
      <div className="movie-list-wrapper">
        <div className="movie-list d-flex justify-content-start flex-wrap">
          {isLoading ?
            "Loading..."
            :
            lodash.map(movies.movieList, (item, key) => {
              return (
                <Movie {...item} key={key}/>
              )
            })}
        </div>
        <Paginator page={movies.page}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.movies.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: url => dispatch(getMovies(url))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList))

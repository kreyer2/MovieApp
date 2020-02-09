import React, { useEffect } from 'react';
import Movie from "./Movies/Movie";
import { connect } from "react-redux";
import {getMovies} from "../../actions/movies_action";
import lodash from 'lodash';
import Paginator from "../Paginator/Paginator";
import Loader from "../Loader";


function MainContent ({getMovies, movies, isLoaded, match}) {

  useEffect(() => {
    getMovies(`${match.url.length > 1 ? match.params.number : 1}`);
  }, []);


  if(isLoaded) {
    return (
      <main className="main-wrapper container-fluid" id="main">
        <div className="list__grid">
          {lodash.map(movies.movieList, (item, key) => {
            return (
              <div className="grid-elem__wrapper" key={key}>
                <Movie {...item}/>
              </div>
            )
          })}
        </div>
        <Paginator page={movies.page}/>
      </main>
    );
  }

  return <Loader/>
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoaded: state.movies.isLoaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: url => dispatch(getMovies(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)

import React, { Component } from 'react';
import lodash from 'lodash';
import Movie from "./Movie";

export default class SimilarMovies extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="similar-wrapper">
        <h3>Similar movies</h3>
        {
          movies.results ?
            <div className="d-flex">
              {lodash.map(movies.results, (item, key) => {
                return (
                  <Movie logo={item.poster_path} id={item.id} name={item.original_title} key={key}/>
                )
              }).slice(0, 10)}
            </div>
            :
            "There is no movies"
        }
      </div>
    );
  }
}
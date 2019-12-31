import React from 'react';
import lodash from 'lodash';

export default function MovieDescription ({movie}) {
    return (
      <div className="movie-overview-wrapper row">
        <div className="poster-image col-md-3">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
               alt={movie.title}/>
        </div>
        <div className="info col-md">
          <div className="title">
            <h1>{movie.title}</h1>
          </div>
          <div className="details width-400">
            <div className="original-title row ">
              <div className="col-md thesis">
                Original title:
              </div>
              <div className="col-md-9">
                {movie.original_title}
              </div>
            </div>
            <div className="tagline row">
              <div className="col-md thesis">
                Tagline:
              </div>
              <div className="col-md-9">
                {movie.tagline}
              </div>
            </div>
            <div className="release-date row ">
              <div className="col-md thesis">
                Release date:
              </div>
              <div className="col-md-9">
                {movie.release_date}
              </div>
            </div>
            <div className="status row ">
              <div className="col-md thesis">
                Status:
              </div>
              <div className="col-md-9">
                {movie.status}
              </div>
            </div>
            <div className="runtime row ">
              <div className="col-md thesis">
                Runtime:
              </div>
              <div className="col-md-9 ">
                {movie.runtime} min
              </div>
            </div>
            <div className="spoken-languages row ">
              <div className="col-md thesis">
                Spoken languages:
              </div>
              <div className="col-md-9">
                {lodash.map(movie.spoken_languages, (item, key) => ( (key ? ', ': '') + item.name ))}
              </div>
            </div>
            <div className="budget row ">
              <div className="col-md thesis">
                Budget:
              </div>
              <div className="col-md-9">
                {movie.budget}$
              </div>
            </div>
            <div className="revenue row ">
              <div className="col-md thesis">
                Revenue:
              </div>
              <div className="col-md-9">
                {movie.revenue}$
              </div>
            </div>
            <div className="genres row ">
              <div className="col-md thesis">
                Genres:
              </div>
              <div className="col-md-9">
                {lodash.map(movie.genres, (item, key) => ( (key ? ', ': '') + item.name ))}
              </div>
              </div>
            <div className="popularity row ">
              <div className="col-md thesis">
                Popularity:
              </div>
              <div className="col-md-9">
                {movie.popularity}
              </div>
            </div>
            <div className="vote-average row ">
              <div className="col-md thesis">
                Vote average:
              </div>
              <div className="col-md-9">
                {movie.vote_average}
              </div>
            </div>
            <div className="vote-count row ">
              <div className="col-md thesis">
                Vote count:
              </div>
              <div className="col-md-9">
                {movie.vote_count}
              </div>
            </div>
            <div className="imbd-id row ">
              <div className="col-md thesis">
                IMDB ID:
              </div>
              <div className="col-md-9">
                {movie.imdb_id}
              </div>
            </div>
            <div className="homepage row ">
              <div className="col-md thesis">
                Homepage:
              </div>
              <div className="col-md-9">
                <a target="_blank" rel="noopener noreferrer" href={movie.homepage}>Link</a>
              </div>
            </div>
            <div className="original-language row ">
              <div className="col-md thesis">
                Original language:
              </div>
              <div className="col-md-9">
                {movie.original_language}
              </div>
            </div>
            <div className="production-companies row ">
              <div className="col-md-3 thesis">
                Production companies:
              </div>
              <div className="col-md-9">
                <div className="row">
                  {lodash.map(movie.production_companies, (item, key) => {
                    return (
                        <div className="companies col-md-2" key={key}>
                          <div className="company-name">
                            {item.name} {item.origin_country}
                          </div>
                          <div className="logo">
                            {item.logo_path === null ?
                              null
                              :
                              <img src={`https://image.tmdb.org/t/p/original${item.logo_path}`} alt={movie.item_name}/>}
                          </div>
                        </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <h2 className="overview thesis">
              About:
            </h2>
            <div className="overview">
              {movie.overview}
            </div>
          </div>
        </div>
      </div>
    );
}
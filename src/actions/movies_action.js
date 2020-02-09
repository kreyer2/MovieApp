import axios from 'axios';

const API_KEY = `api_key=6fdbf3d8cc8d2a408d0252860c4a972e`;

const POPULAR_API = `//api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=`;


export const getMovies = (page) => dispatch => {
  axios.get(POPULAR_API + page)
    .then(res => dispatch({
      type: "GET_MOVIES",
      page: res.data.page,
      movieList: res.data.results,
      totalPages: res.data.total_pages,
      totalResults: res.data.total_results
    }))
    .catch(err => {
      dispatch(isError(true));
      throw Error `Something gonna wrong... ${err.statusText}`
    });

  dispatch(isLoaded(true));
};

export const getMovieById = (id) => dispatch => {
  try {
    const MOVIE_API = `//api.themoviedb.org/3/movie/${id}?${API_KEY}&language=en-US`;

    axios.get(MOVIE_API)
      .then(res =>
        dispatch({
          type: "GET_MOVIE_BY_ID",
          movieById: res.data
        }));

    dispatch(getSimilarMovies(id));
    dispatch(isLoaded(true))
  } catch (err) {
    dispatch(isError(true));
    throw Error `Something gonna wrong... ${err.statusText}`
  }
};

export const getSimilarMovies = (movieId) => dispatch => {
  try {
    const SIMILAR_API = `//api.themoviedb.org/3/movie/${movieId}/similar?${API_KEY}&language=en-US`;

    axios.get(SIMILAR_API)
      .then(res =>
        dispatch({
          type: "GET_SIMILAR_MOVIES",
          similarMovies: res.data
        }));

    dispatch(isLoaded(true))
  } catch (err) {
    dispatch(isError(true));
    throw Error `Something gonna wrong... ${err.statusText}`
  }
};

const isLoaded = (bool) => {
  return {
    type: "IS_LOADING",
    bool
  }
};

const isError = (bool) => {
  return {
    type: "IS_ERROR",
    bool
  }
};
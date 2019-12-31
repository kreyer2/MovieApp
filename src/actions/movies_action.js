import axios from 'axios';

export const getMovies = (url) => dispatch => {
  dispatch(isLoading(true));

  axios.get(url)
    .then(res => {
      dispatch({
        type: "GET_MOVIES",
        page: res.data.page,
        movieList: res.data.results,
        totalPages: res.data.total_pages,
        totalResults: res.data.total_results
      })
    })
    .catch(err => {
      dispatch(isError(true));
      throw Error `Something gonna wrong... ${err.statusText}`
    });

  dispatch(isLoading(false));
};

export const getMovieById = (url) => dispatch => {
  dispatch(isLoading(true));

  axios.get(url)
    .then(res => {
      dispatch({
        type: "GET_MOVIE_BY_ID",
        movieById: res.data
      })
    })
    .catch(err => {
      dispatch(isError(true));
      throw Error `Something gonna wrong... ${err.statusText}`
    });

  dispatch(isLoading(false))
};

export const getSimilarMovies = (url) => dispatch => {
  dispatch(isLoading(true));

  axios.get(url)
    .then(res => {
      dispatch({
        type: "GET_SIMILAR_MOVIES",
        similarMovies: res.data
      })
    })
    .catch(err => {
      dispatch(isError(true));
      throw Error `Something gonna wrong... ${err.statusText}`
    });

  dispatch(isLoading(false))
};

const isLoading = (bool) => {
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
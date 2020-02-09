const initialState = {
  isLoaded: false,
  isError: false,
  movieById: {},
  movies: [],
  similarMovies: {
    results: []
  }
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movieList: action.movieList,
        page: action.page,
        totalPages: action.totalPages,
        totalResults: action.totalResults
      };
    case "GET_MOVIE_BY_ID":
      return {
        ...state,
        movieById: action.movieById
      };
    case "GET_SIMILAR_MOVIES":
      return {
        ...state,
        similarMovies: action.similarMovies
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoaded: action.bool
      };
    case "IS_ERROR":
      return {
        ...state,
        isError: action.bool
      };
    default:
      return state;
  }
};
import { MovieAction, MovieState } from '../types';

const initialState: MovieState = {
  popularMovies: [],
  movieDetail: null,
  searchResults: [],
  loading: true,
  error: null,
};

const movieReducer = (state = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case 'FETCH_POPULAR_MOVIES_SUCCESS':
      return { ...state, popularMovies: action.payload, loading: false };
    case 'FETCH_MOVIE_DETAIL_SUCCESS':
      return { ...state, movieDetail: action.payload, loading: false };
    case 'SEARCH_MOVIES_SUCCESS':
      return { ...state, searchResults: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, error: action.payload, loading: false };
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

export default movieReducer;
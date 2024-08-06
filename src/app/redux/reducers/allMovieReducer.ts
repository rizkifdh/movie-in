import { AllMovieAction, AllMovieState } from '../types';

const initialState: AllMovieState = {
  movies: [],
  loading: false,
  error: null,
};

const allMovieReducer = (state = initialState, action: AllMovieAction): AllMovieState => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, movies: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, error: action.payload, loading: false };
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

export default allMovieReducer;
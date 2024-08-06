import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import allMovieReducer from './allMovieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  allMovie: allMovieReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Plot?: string;
  Genre?: string;
  Released?: string;
  Runtime?: string;
  Rated?: string;
  Director?: string;
  Writer?: string[];
  Actors?: string[];
  imdbRating?: string;
  imdbVotes?: string;
}

export interface AllMovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export interface MovieState {
  popularMovies: Movie[];
  movieDetail: Movie | null;
  searchResults: Movie[];
  loading: boolean;
  error: string | null;
}

export interface FetchMovieDetailAction {
  type: 'FETCH_MOVIE_DETAIL_REQUEST';
  payload: string;
}

export interface SearchMoviesAction {
  type: 'SEARCH_MOVIES_REQUEST';
  payload: string;
}

export type MovieAction =
  | { type: 'FETCH_MOVIES_SUCCESS'; payload: Movie[] }
  | { type: 'FETCH_POPULAR_MOVIES_SUCCESS'; payload: Movie[] }
  | { type: 'FETCH_MOVIE_DETAIL_SUCCESS'; payload: Movie }
  | { type: 'SEARCH_MOVIES_SUCCESS'; payload: Movie[] }
  | { type: 'FETCH_FAILED'; payload: string }
  | { type: 'FETCH_START' };


export type AllMovieAction =
  | { type: 'FETCH_MOVIES_SUCCESS'; payload: Movie[] }
  | { type: 'FETCH_FAILED'; payload: string }
  | { type: 'FETCH_START' };
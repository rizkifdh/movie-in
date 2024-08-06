export const fetchMovies = () => ({
  type: 'FETCH_MOVIES_REQUEST',
});
export const fetchPopularMovies = (page: number) => ({
  type: 'FETCH_POPULAR_MOVIES_REQUEST',
  payload: { page },
});
export const fetchMovieDetail = (id: string) => ({ type: 'FETCH_MOVIE_DETAIL_REQUEST', payload: id });
export const searchMovies = (query: string) => ({ type: 'SEARCH_MOVIES_REQUEST', payload: query });
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FetchMovieDetailAction, SearchMoviesAction } from '../types';
import { AxiosResponse } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function* fetchMovies() {
  try {
    const response: AxiosResponse = yield call(axios.get, `${API_URL}/?apikey=${API_KEY}&s=avengers`);
    yield put({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.Search });
  } catch (error: any) {
    yield put({ type: 'FETCH_FAILED', payload: error.message });
  }
}

function* fetchPopularMovies(action: { type: string; payload: { page: number } }) {
  try {
    const { page } = action.payload;
    const response: AxiosResponse = yield call(axios.get, `${API_URL}/?apikey=${API_KEY}&s=movie&y=2024&page=${page}`);
    yield put({ type: 'FETCH_POPULAR_MOVIES_SUCCESS', payload: response.data.Search });
  } catch (error: any) {
    yield put({ type: 'FETCH_FAILED', payload: error.message });
  }
}

function* fetchMovieDetail(action: FetchMovieDetailAction) {
  try {
    const response:AxiosResponse = yield call(axios.get, `${API_URL}/?apikey=${API_KEY}&i=${action.payload}`);
    yield put({ type: 'FETCH_MOVIE_DETAIL_SUCCESS', payload: response.data });
  } catch (error:any) {
    yield put({ type: 'FETCH_FAILED', payload: error.message });
  }
}

function* searchMovies(action: SearchMoviesAction) {
  try {
    const response:AxiosResponse = yield call(axios.get, `${API_URL}/?apikey=${API_KEY}&s=${action.payload}`);
    yield put({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data.Search });
  } catch (error:any) {
    yield put({ type: 'FETCH_FAILED', payload: error.message });
  }
}

export default function* movieSaga() {
  yield takeLatest('FETCH_MOVIES_REQUEST', fetchMovies);
  yield takeLatest('FETCH_POPULAR_MOVIES_REQUEST', fetchPopularMovies);
  yield takeLatest('FETCH_MOVIE_DETAIL_REQUEST', fetchMovieDetail);
  yield takeLatest('SEARCH_MOVIES_REQUEST', searchMovies);
}
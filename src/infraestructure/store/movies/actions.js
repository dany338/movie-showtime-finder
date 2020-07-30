import {
  MOVIES_NEWS_LIST_INIT,
  MOVIES_NEWS_LIST_SUCCESS,
  MOVIES_NEWS_LIST_ERROR,
  MOVIES_ALL_GENRES_INIT,
  MOVIES_ALL_GENRES_SUCCESS,
  MOVIES_ALL_GENRES_ERROR,
  MOVIES_DISCOVER_GENRES_INIT,
  MOVIES_DISCOVER_GENRES_SUCCESS,
  MOVIES_DISCOVER_GENRES_ERROR,
  MOVIE_BY_ID_INIT,
  MOVIE_BY_ID_SUCCESS,
  MOVIE_BY_ID_ERROR,
  MOVIES_POPULAR_LIST_INIT,
  MOVIES_POPULAR_LIST_SUCCESS,
  MOVIES_POPULAR_LIST_ERROR,
  MOVIES_SEARCH_LIST_INIT,
  MOVIES_SEARCH_LIST_SUCCESS,
  MOVIES_SEARCH_LIST_ERROR
} from './types';

export const moviesNewsListInit = () => ({ type: MOVIES_NEWS_LIST_INIT });
export const moviesNewsListSuccess = (data, totalPages, totalResults, page) => ({ type: MOVIES_NEWS_LIST_SUCCESS, payload: { data, totalPages, totalResults, page } });
export const moviesNewsListError = error => ({ type: MOVIES_NEWS_LIST_ERROR, payload: error });
export const moviesAllGenresInit = () => ({ type: MOVIES_ALL_GENRES_INIT });
export const moviesAllGenresSuccess = data => ({ type: MOVIES_ALL_GENRES_SUCCESS, payload: { data } });
export const moviesAllGenresError = error => ({ type: MOVIES_ALL_GENRES_ERROR, payload: error });
export const moviesDiscoverGenresInit = () => ({ type: MOVIES_DISCOVER_GENRES_INIT });
export const moviesDiscoverGenresSuccess = (data, totalPages, totalResults, page) => ({ type: MOVIES_DISCOVER_GENRES_SUCCESS, payload: { data, totalPages, totalResults, page } });
export const moviesDiscoverGenresError = error => ({ type: MOVIES_DISCOVER_GENRES_ERROR, payload: error });
export const movieByIdInit = () => ({ type: MOVIE_BY_ID_INIT });
export const movieByIdSuccess = data => ({ type: MOVIE_BY_ID_SUCCESS, payload: { data } });
export const movieByIdError = error => ({ type: MOVIE_BY_ID_ERROR, payload: error });
export const moviesPopularListInit = () => ({ type: MOVIES_POPULAR_LIST_INIT });
export const moviesPopularListSuccess = (data, totalPages, totalResults, page) => ({ type: MOVIES_POPULAR_LIST_SUCCESS, payload: { data, totalPages, totalResults, page } });
export const moviesPopularListError = error => ({ type: MOVIES_POPULAR_LIST_ERROR, payload: error });
export const moviesSearchListInit = () => ({ type: MOVIES_SEARCH_LIST_INIT });
export const moviesSearchListSuccess = (data, totalPages, totalResults, page) => ({ type: MOVIES_SEARCH_LIST_SUCCESS, payload: { data, totalPages, totalResults, page } });
export const moviesSearchListError = error => ({ type: MOVIES_SEARCH_LIST_ERROR, payload: error });

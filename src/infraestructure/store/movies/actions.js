import {
  MOVIES_LIST_INIT,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_ERROR
} from './types';

export const moviesListInit = () => ({ type: MOVIES_LIST_INIT });
export const moviesListSuccess = data => ({ type: MOVIES_LIST_SUCCESS, payload: { data } });
export const moviesListError = error => ({ type: MOVIES_LIST_ERROR, payload: error });

import {
  REVIEWS_LIST_INIT,
  REVIEWS_LIST_SUCCESS,
  REVIEWS_LIST_ERROR,
  REVIEWS_CREATE_INIT,
  REVIEWS_CREATE_SUCCESS,
  REVIEWS_CREATE_ERROR
} from './types';

export const reviewsListInit = () => ({ type: REVIEWS_LIST_INIT });
export const reviewsListSuccess = data => ({ type: REVIEWS_LIST_SUCCESS, payload: { data } });
export const reviewsListError = error => ({ type: REVIEWS_LIST_ERROR, payload: error });
export const reviewCreateInit = () => ({ type: REVIEWS_CREATE_INIT });
export const reviewCreateSuccess = data => ({ type: REVIEWS_CREATE_SUCCESS, payload: { data } });
export const reviewCreateError = error => ({ type: REVIEWS_CREATE_ERROR, payload: error });

import {
  reviewsListInit,
  reviewsListSuccess,
  reviewsListError,
  reviewCreateInit,
  reviewCreateSuccess,
  reviewCreateError
} from './actions';
import * as ReviewsServices from "../../services";

export const reviewsRequest = (token, uid) => {
  return async dispatch => {
    dispatch(reviewsListInit());
    try {
      const data = await ReviewsServices.apiReviews.search(token, uid);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        dispatch(reviewsListSuccess(data.data));
      } else if(typeof data === 'string') {
        dispatch(reviewsListError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(reviewsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const reviewCreateRequest = (token, form) => {
  return async dispatch => {
    dispatch(reviewCreateInit());
    try {
      const data = await ReviewsServices.apiReviews.create(token, form);
      if(typeof data === 'object' && typeof data.data === 'object') {
        dispatch(reviewCreateSuccess(data.data));
        return { msg: data.message, err: false };
      }
      if(typeof data === 'string') {
        dispatch(reviewCreateError(data.toString()));
        return { msg: `${data}`, err: true };
      }
      return { msg: '', err: false };
    } catch (error) {
      dispatch(reviewCreateError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};

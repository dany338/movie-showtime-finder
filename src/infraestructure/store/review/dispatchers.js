import {
  reviewsListInit,
  reviewsListSuccess,
  reviewsListError,
  reviewCreateInit,
  reviewCreateSuccess,
  reviewCreateError
} from './actions';
import * as ReviewsServices from "../../services";

export const reviewsRequest = (values, from, to) => {
  return async dispatch => {
    dispatch(reviewsListInit());
    try {
      const data = await ReviewsServices.apiReviews.search(values, from, to);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        const countValues = Object.keys(values).length;
        const total = ((data.metadata && countValues === 0) && data.metadata.total) || data.data.length;
        const pageCount = Math.round(total / to) || Math.ceil(total / to);
        dispatch(reviewsListSuccess(data.data, pageCount));
      } else if(typeof data === 'string') {
        dispatch(reviewsListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(reviewsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const reviewCreateRequest = (form, token) => {
  return async dispatch => {
    dispatch(reviewCreateInit());
    try {
      const data = await ReviewsServices.apiReviews.create(form, token);
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

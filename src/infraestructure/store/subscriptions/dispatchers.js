import {
  subscriptionsListInit,
  subscriptionsListSuccess,
  subscriptionsListError,
  subscriptionCreateInit,
  subscriptionCreateSuccess,
  subscriptionCreateError,
} from './actions';
import * as SubscriptionsServices from "../../services";

export const subscriptionsRequest = (values, from, to) => {
  return async dispatch => {
    dispatch(subscriptionsListInit());
    try {
      const data = await SubscriptionsServices.apiSubscriptions.search(values, from, to);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        const countValues = Object.keys(values).length;
        const total = ((data.metadata && countValues === 0) && data.metadata.total) || data.data.length;
        const pageCount = Math.round(total / to) || Math.ceil(total / to);
        dispatch(subscriptionsListSuccess(data.data, pageCount));
      } else if(typeof data === 'string') {
        dispatch(subscriptionsListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(subscriptionsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const subscriptionCreateRequest = (form, token) => {
  return async dispatch => {
    dispatch(subscriptionCreateInit());
    try {
      const data = await SubscriptionsServices.apiSubscriptions.create(form, token);
      if(typeof data === 'object' && typeof data.data === 'object') {
        dispatch(subscriptionCreateSuccess(data.data));
        return { msg: data.message, err: false };
      }
      if(typeof data === 'string') {
        dispatch(subscriptionCreateError(data.toString()));
        return { msg: `${data}`, err: true };
      }
      return { msg: '', err: false };
    } catch (error) {
      dispatch(subscriptionCreateError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};

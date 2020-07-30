import {
  subscriptionsListInit,
  subscriptionsListSuccess,
  subscriptionsListError,
  subscriptionCreateInit,
  subscriptionCreateSuccess,
  subscriptionCreateError,
} from './actions';
import * as SubscriptionsServices from "../../services";

export const subscriptionsRequest = (token, uid) => {
  return async dispatch => {
    dispatch(subscriptionsListInit());
    try {
      const data = await SubscriptionsServices.apiSubscriptions.search(token, uid);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        dispatch(subscriptionsListSuccess(data.data));
      } else if(typeof data === 'string') {
        dispatch(subscriptionsListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(subscriptionsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const subscriptionCreateRequest = (token, form) => {
  return async dispatch => {
    dispatch(subscriptionCreateInit());
    try {
      const data = await SubscriptionsServices.apiSubscriptions.create(token, form);
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

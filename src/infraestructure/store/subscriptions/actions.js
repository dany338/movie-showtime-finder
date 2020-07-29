import {
  SUBSCRIPTIONS_LIST_INIT,
  SUBSCRIPTIONS_LIST_SUCCESS,
  SUBSCRIPTIONS_LIST_ERROR,
  SUBSCRIPTION_CREATE_INIT,
  SUBSCRIPTION_CREATE_SUCCESS,
  SUBSCRIPTION_CREATE_ERROR
} from './types';

export const subscriptionsListInit = () => ({ type: SUBSCRIPTIONS_LIST_INIT });
export const subscriptionsListSuccess = data => ({ type: SUBSCRIPTIONS_LIST_SUCCESS, payload: { data } });
export const subscriptionsListError = error => ({ type: SUBSCRIPTIONS_LIST_ERROR, payload: error });
export const subscriptionCreateInit = () => ({ type: SUBSCRIPTION_CREATE_INIT });
export const subscriptionCreateSuccess = data => ({ type: SUBSCRIPTION_CREATE_SUCCESS, payload: { data } });
export const subscriptionCreateError = error => ({ type: SUBSCRIPTION_CREATE_ERROR, payload: error });

import {
  NOTIFICATIONS_LIST_INIT,
  NOTIFICATIONS_LIST_SUCCESS,
  NOTIFICATIONS_LIST_ERROR
} from './types';

export const notificationsListInit = () => ({ type: NOTIFICATIONS_LIST_INIT });
export const notificationsListSuccess = data => ({ type: NOTIFICATIONS_LIST_SUCCESS, payload: { data } });
export const notificationsListError = error => ({ type: NOTIFICATIONS_LIST_ERROR, payload: error });

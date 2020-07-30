import {
  notificationsListInit,
  notificationsListSuccess,
  notificationsListError
} from './actions';
import * as NotificationsServices from "../../services";

export const notificationsRequest = (token, uid) => {
  return async dispatch => {
    dispatch(notificationsListInit());
    try {
      const data = await NotificationsServices.apiNotifications.search(token, uid);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        dispatch(notificationsListSuccess(data.data, data.total_results));
      } else if(typeof data === 'string') {
        dispatch(notificationsListError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(notificationsListError('An error was generated please consult the administrator!'));
    }
  };
};

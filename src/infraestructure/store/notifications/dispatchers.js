import {
  notificationsListInit,
  notificationsListSuccess,
  notificationsListError
} from './actions';
import * as NotificationsServices from "../../services";

export const notificationsRequest = (values, from, to) => {
  return async dispatch => {
    dispatch(notificationsListInit());
    try {
      const data = await NotificationsServices.apiNotifications.search(values, from, to);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        const countValues = Object.keys(values).length;
        const total = ((data.metadata && countValues === 0) && data.metadata.total) || data.data.length;
        const pageCount = Math.round(total / to) || Math.ceil(total / to);
        dispatch(notificationsListSuccess(data.data, pageCount));
      } else if(typeof data === 'string') {
        dispatch(notificationsListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(notificationsListError('An error was generated please consult the administrator!'));
    }
  };
};

import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT,
  USER_FORM_FIELD_CHANGE
} from './types';

export const loginInit = () => ({ type: LOGIN_INIT });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: { data } });
export const loginFailed = error => ({ type: LOGIN_ERROR, payload: error });
export const logoutInit = () => ({ type: LOGOUT_INIT });
export const userFormFieldChangeInit = (name, value) => ({ type: USER_FORM_FIELD_CHANGE, payload: { name, value } });

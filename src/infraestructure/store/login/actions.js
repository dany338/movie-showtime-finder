import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT,
  USER_FORM_FIELD_CHANGE,
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_CREATE_ERROR
} from './types';

export const loginInit = () => ({ type: LOGIN_INIT });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: { data } });
export const loginFailed = error => ({ type: LOGIN_ERROR, payload: error });
export const logoutInit = () => ({ type: LOGOUT_INIT });
export const userFormFieldChangeInit = (name, value) => ({ type: USER_FORM_FIELD_CHANGE, payload: { name, value } });
export const userCreateInit = () => ({ type: USER_CREATE_INIT });
export const userCreateSuccess = data => ({ type: USER_CREATE_SUCCESS, payload: { data } });
export const userCreateFailed = error => ({ type: USER_CREATE_ERROR, payload: error });

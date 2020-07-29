import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT,
} from './types';

export const loginInit = () => ({ type: LOGIN_INIT });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: { data } });
export const loginFailed = error => ({ type: LOGIN_ERROR, payload: error });
export const logoutInit = () => ({ type: LOGOUT_INIT });

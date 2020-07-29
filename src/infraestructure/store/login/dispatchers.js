import {
  loginInit,
  loginSuccess,
  loginFailed,
  logoutInit
} from './actions';
import * as LoginServices from "../../services";

export const loginRequest = formData => {
  return async (dispatch) => {
		dispatch(loginInit());
		try {
      const data = await LoginServices.apiLogin.login(formData);
      if (typeof data.token !== 'undefined') {
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginFailed(data.toString()));
      }
		} catch (error) {
      console.error(error);
			dispatch(loginFailed('An error was generated when authenticating please consult the administrator!'));
		}
	};
};

export const logoutRequest = () => {
	return async (dispatch) => {
		try {
			dispatch(logoutInit());
		} catch (error) {
      console.error(error);
			dispatch(loginFailed('An error was generated please consult the administrator!'));
		}
	};
};

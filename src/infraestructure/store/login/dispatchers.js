import {
  loginInit,
  loginSuccess,
  loginFailed,
  logoutInit,
  userFormFieldChangeInit,
  userCreateInit,
  userCreateSuccess,
  userCreateFailed
} from './actions';
import * as LoginServices from "../../services";

export const loginRequest = formData => {
  return async (dispatch) => {
		dispatch(loginInit());
		try {
      const data = await LoginServices.apiLogin.login(formData);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        dispatch(loginSuccess(data.data));
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

export const userFieldChangeRequest = (name, value) => {
  return async dispatch => {
    try {
      dispatch(userFormFieldChangeInit(name, value));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const userCreateRequest = formData => {
  return async (dispatch) => {
		dispatch(userCreateInit());
		try {
      const data = await LoginServices.apiLogin.create(formData);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        dispatch(userCreateSuccess(data.data));
      } else {
        dispatch(userCreateFailed(data.toString()));
      }
		} catch (error) {
      console.error(error);
			dispatch(userCreateFailed('An error was generated when authenticating please consult the administrator!'));
		}
	};
};

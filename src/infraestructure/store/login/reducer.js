import Cookies from "js-cookie";
import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT
} from './types';
const isCookie = (typeof Cookies.get('movieshowtime') !== 'undefined');

const initialState = {
  userLogin: isCookie ? JSON.parse(Cookies.get('movieshowtime')).userLogin : null,
  token: isCookie ? JSON.parse(Cookies.get('movieshowtime')).token : null,
	isLoading: false,
	isLoggedIn: isCookie,
  error: '',
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case LOGIN_SUCCESS: {
      const { username, token } = payload.data;

      Cookies.set('movieshowtime', { username, token }, {
        expires: 1 // Expire one day
      });

      return {
        ...state,
        userLogin: username,
        token,
        isLoading: false,
        isLoggedIn: true,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: payload,
      };
    }

    case LOGOUT_INIT: {
      Cookies.remove('movieshowtime');

      return {
        ...state,
        error: '',
        isLoading: true,
        isLoggedIn: false,
        userLogin: null,
        token: null,
      };
    }

    default: {
			return state;
		}
	}
};

export { login as default, initialState };

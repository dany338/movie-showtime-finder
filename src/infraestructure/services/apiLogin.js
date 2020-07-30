import { API_HOST_BACKEND } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  newApiHeaders.append("Content-Type", "application/json");
  newApiHeaders.append("Accept", "application/json");
  return {
    method,
    // headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiLogin = {
  login: async form => {
    try {
      const response = await fetch(`${API_HOST_BACKEND}${endpoints.login.signIn}`, fetchParams('POST', { ...form }));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error.toString();
    }
  },
  create: async form => {
    try {
      const response = await fetch(`${API_HOST_BACKEND}${endpoints.login.signUp}`, fetchParams('POST', { ...form }));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error.toString();
    }
  },
};

export default apiLogin;

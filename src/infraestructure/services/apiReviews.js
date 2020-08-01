import { API_HOST_BACKEND } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

// const apiHeaders = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  newApiHeaders.append("Content-Type", "application/json");
  newApiHeaders.append("Accept", "application/json");
  return {
    method,
    headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiReviews = {
  search: async (token, uid) => {
    try {
      const response = await fetch(`${API_HOST_BACKEND}${endpoints.review.search}?access-token=${token}&uid=${uid}`, fetchParams('GET'));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  create: async (token, form) => {
    try {
      const response = await fetch(`${API_HOST_BACKEND}${endpoints.review.create}?access-token=${token}`, fetchParams('POST', { ...form }));
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

export default apiReviews;

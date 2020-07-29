import {API_HOST, API_KEY, LANG} from '../config/const';
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
    headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiReviews = {
  getNewsMovies: async (page = 1) => {
    try {
      const response = await fetch( `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  searchPeople: async (search, offset, size, aggregate) => {
    try {
      const response = await fetch(`${MOVIE_URL_API}${endpoints.torre.searchPeople}/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`, fetchParams('POST', { ...search }));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default apiReviews;

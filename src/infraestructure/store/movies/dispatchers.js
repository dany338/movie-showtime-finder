import {
  moviesListInit,
  moviesListSuccess,
  moviesListError
} from './actions';
import * as MoviesServices from "../../services";

export const moviesRequest = (values, from, to) => {
  return async dispatch => {
    dispatch(moviesListInit());
    try {
      const data = await MoviesServices.apiTraslados.search(values, from, to);
      if(typeof data === 'object' && Array.isArray(data.data)) {
        const countValues = Object.keys(values).length;
        const total = ((data.metadata && countValues === 0) && data.metadata.total) || data.data.length;
        const pageCount = Math.round(total / to) || Math.ceil(total / to);
        dispatch(moviesListSuccess(data.data, pageCount));
      } else if(typeof data === 'string') {
        dispatch(moviesListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(moviesListError('An error was generated please consult the administrator!'));
    }
  };
};

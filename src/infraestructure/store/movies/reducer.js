import {
  MOVIES_LIST_INIT,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const movie = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { movie as default, initialState };

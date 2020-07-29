import {
  REVIEWS_LIST_INIT,
  REVIEWS_LIST_SUCCESS,
  REVIEWS_LIST_ERROR,
  REVIEWS_CREATE_INIT,
  REVIEWS_CREATE_SUCCESS,
  REVIEWS_CREATE_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const review = (state = initialState, { type, payload }) => {
  switch (type) {
    case REVIEWS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case REVIEWS_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case REVIEWS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case REVIEWS_CREATE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case REVIEWS_CREATE_SUCCESS: {
      return {
        ...state,
        data: [ ...state.data, payload.data ],
        isLoading: false,
        error: ''
      };
    }

    case REVIEWS_CREATE_ERROR: {
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

export { review as default, initialState };

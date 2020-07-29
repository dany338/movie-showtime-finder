import {
  NOTIFICATIONS_LIST_INIT,
  NOTIFICATIONS_LIST_SUCCESS,
  NOTIFICATIONS_LIST_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const notification = (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFICATIONS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case NOTIFICATIONS_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case NOTIFICATIONS_LIST_ERROR: {
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

export { notification as default, initialState };

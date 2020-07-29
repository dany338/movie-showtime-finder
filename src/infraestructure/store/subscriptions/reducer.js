import {
  SUBSCRIPTIONS_LIST_INIT,
  SUBSCRIPTIONS_LIST_SUCCESS,
  SUBSCRIPTIONS_LIST_ERROR,
  SUBSCRIPTION_CREATE_INIT,
  SUBSCRIPTION_CREATE_SUCCESS,
  SUBSCRIPTION_CREATE_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const subscription = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBSCRIPTIONS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case SUBSCRIPTIONS_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case SUBSCRIPTIONS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case SUBSCRIPTION_CREATE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case SUBSCRIPTION_CREATE_SUCCESS: {
      return {
        ...state,
        data: [ ...state.data, payload.data ],
        isLoading: false,
        error: ''
      };
    }

    case SUBSCRIPTION_CREATE_ERROR: {
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

export { subscription as default, initialState };

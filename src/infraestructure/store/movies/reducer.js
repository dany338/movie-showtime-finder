import {
  MOVIES_NEWS_LIST_INIT,
  MOVIES_NEWS_LIST_SUCCESS,
  MOVIES_NEWS_LIST_ERROR,
  MOVIES_ALL_GENRES_INIT,
  MOVIES_ALL_GENRES_SUCCESS,
  MOVIES_ALL_GENRES_ERROR,
  MOVIES_DISCOVER_GENRES_INIT,
  MOVIES_DISCOVER_GENRES_SUCCESS,
  MOVIES_DISCOVER_GENRES_ERROR,
  MOVIE_BY_ID_INIT,
  MOVIE_BY_ID_SUCCESS,
  MOVIE_BY_ID_ERROR,
  MOVIES_POPULAR_LIST_INIT,
  MOVIES_POPULAR_LIST_SUCCESS,
  MOVIES_POPULAR_LIST_ERROR,
  MOVIES_SEARCH_LIST_INIT,
  MOVIES_SEARCH_LIST_SUCCESS,
  MOVIES_SEARCH_LIST_ERROR
} from './types';

const initialState = {
  data: [],
  genres: [],
  movie: null,
  discoverGenres: [],
  totalPages: 0,
  totalResults: 0,
  currentPage: 0,
  isLoading: false,
  error: null,
};

const movie = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_NEWS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_NEWS_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        currentPage: payload.page,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_NEWS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case MOVIES_ALL_GENRES_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_ALL_GENRES_SUCCESS: {
      return {
        ...state,
        genres: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_ALL_GENRES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case MOVIES_DISCOVER_GENRES_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_DISCOVER_GENRES_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        currentPage: payload.page,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_DISCOVER_GENRES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case MOVIE_BY_ID_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIE_BY_ID_SUCCESS: {
      return {
        ...state,
        movie: payload.data,
        isLoading: false,
        error: ''
      };
    }

    case MOVIE_BY_ID_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case MOVIES_POPULAR_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_POPULAR_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        currentPage: payload.page,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_POPULAR_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case MOVIES_SEARCH_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case MOVIES_SEARCH_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        currentPage: payload.page,
        isLoading: false,
        error: ''
      };
    }

    case MOVIES_SEARCH_LIST_ERROR: {
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

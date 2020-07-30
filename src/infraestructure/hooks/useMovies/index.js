import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import moviesReducer from '../../store/movies';

const { dispatchers } = moviesReducer;

const useMovies = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { movie } = state;

  // List of Dispatchers
	const {
    getMoviesNewsRequest,
    getGenreMovieRequest,
    getMoviesAllGenresRequest,
    getMoviesDiscoverGenresRequest,
    getMovieByIdRequest,
    getPopularMoviesRequest,
    getSearchMoviesRequest
  } = dispatchers;

  // Bind Actions
	const moviesActions = bindActions({
    getMoviesNewsRequest,
    getGenreMovieRequest,
    getMoviesAllGenresRequest,
    getMoviesDiscoverGenresRequest,
    getMovieByIdRequest,
    getPopularMoviesRequest,
    getSearchMoviesRequest
  }, dispatch);

  return { ...movie, ...moviesActions };
};

export default useMovies;

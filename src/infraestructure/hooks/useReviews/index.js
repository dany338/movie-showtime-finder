import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import reviewsReducer from '../../store/reviews';

const { dispatchers } = reviewsReducer;

const useReviews = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { review } = state;

  // List of Dispatchers
	const {
    reviewsRequest,
    reviewCreateRequest
  } = dispatchers;

  // Bind Actions
	const reviewsActions = bindActions({
    reviewsRequest,
    reviewCreateRequest
  }, dispatch);

  return { ...review, ...reviewsActions };
};

export default useReviews;

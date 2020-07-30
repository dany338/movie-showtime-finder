import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import subscriptionsReducer from '../../store/subscriptions';

const { dispatchers } = subscriptionsReducer;

const useSubscriptions = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { subscription } = state;

  // List of Dispatchers
	const {
    subscriptionsRequest,
    subscriptionCreateRequest
  } = dispatchers;

  // Bind Actions
	const subscriptionsActions = bindActions({
    subscriptionsRequest,
    subscriptionCreateRequest
  }, dispatch);

  return { ...subscription, ...subscriptionsActions };
};

export default useSubscriptions;

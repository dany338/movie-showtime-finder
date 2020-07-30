import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import notificationsReducer from '../../store/notifications';

const { dispatchers } = notificationsReducer;

const useNotifications = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { notification } = state;

  // List of Dispatchers
	const {
    notificationsRequest
  } = dispatchers;

  // Bind Actions
	const notificationsActions = bindActions({
    notificationsRequest
  }, dispatch);

  return { ...notification, ...notificationsActions };
};

export default useNotifications;

import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import loginReducer from '../../store/login';

const { dispatchers } = loginReducer;

const useLogin = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { login } = state;

  // List of Dispatchers
	const {
    loginRequest,
    logoutRequest
  } = dispatchers;

  // Bind Actions
	const loginActions = bindActions({
    loginRequest,
    logoutRequest
  }, dispatch);

  return { ...login, ...loginActions };
};

export default useLogin;

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
    logoutRequest,
    userFieldChangeRequest,
    userCreateRequest
  } = dispatchers;

  // Bind Actions
	const loginActions = bindActions({
    loginRequest,
    logoutRequest,
    userFieldChangeRequest,
    userCreateRequest
  }, dispatch);

  return { ...login, ...loginActions };
};

export default useLogin;

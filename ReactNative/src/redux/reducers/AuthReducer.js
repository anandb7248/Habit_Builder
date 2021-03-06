import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_SUCCESS,
  VERIFY_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../actions/Types";

/* Initial Login state to build from */
const InitAuthState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  signedUp: false,
  user: {},
};

/* USER OBJECT SCHEMA -> from auth sign in
  {
    uid: ...,
    email: ...,
    createdAt: ...,
  }
*/

const AuthReducer = (state = InitAuthState, action) => {
  switch (action.type) {
    /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isVerifying: false,
        isAuthenticated: false,
        loginError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signedUp: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;

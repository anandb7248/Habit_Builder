import {
  INIT_USER_REQUEST,
  INIT_USER_FAILURE,
  INIT_USER_SUCCESS,
} from "../actions/Types";

/* Initial Login state to build from */
const InitUserState = {
  isInit: false,
  initError: false,
};

const UserReducer = (state = InitUserState, action) => {
  switch (action.type) {
    case INIT_USER_SUCCESS:
      return {
        ...state,
        isInit: true,
      };
    case INIT_USER_FAILURE:
      return {
        ...state,
        initError: true,
      };
    case INIT_USER_REQUEST:
      return {
        ...state,
        initError: false,
      };
    default:
      return state;
  }
};

export default UserReducer;

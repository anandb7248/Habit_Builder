import {
  INIT_USER_REQUEST,
  INIT_USER_FAILURE,
  INIT_USER_SUCCESS,
  GET_GOALS_REQUEST,
  GET_GOALS_FAILURE,
  GET_GOALS_SUCCESS,
} from "../actions/Types";

/* Initial Login state to build from */
const InitUserState = {
  isInit: false,
  initError: false,
  loadedGoals: false,
  goalsError: false,
  goals: [],
};

/* CURRENT GOAL SCHEMA
  goals: [
    name: ...,
    habits: [
      name: ...
    ]
  ]
*/

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
    case GET_GOALS_REQUEST:
      return {
        ...state,
        goalsError: false,
      };
    case GET_GOALS_SUCCESS:
      return {
        ...state,
        loadedGoals: true,
        goals: action.goals,
      };
    case GET_GOALS_FAILURE:
      return {
        ...state,
        goalsError: true,
      };
    default:
      return state;
  }
};

export default UserReducer;

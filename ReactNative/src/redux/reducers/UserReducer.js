import {
  INIT_USER_REQUEST,
  INIT_USER_FAILURE,
  INIT_USER_SUCCESS,
  GET_GOALS_REQUEST,
  GET_GOALS_FAILURE,
  GET_GOALS_SUCCESS,
  EDIT_GOAL_REQUEST,
  EDIT_GOAL_SUCCESS,
  EDIT_GOAL_FAILURE,
  DELETE_GOAL_REQUEST,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_FAILURE,
  EDIT_HABIT_REQUEST,
  EDIT_HABIT_FAILURE,
  EDIT_HABIT_SUCCESS,
  DELETE_HABIT_REQUEST,
  DELETE_HABIT_FAILURE,
  DELETE_HABIT_SUCCESS,
} from "../actions/Types";

/* Initial Login state to build from */
const InitUserState = {
  isInit: false,
  initError: false,
  loadedGoals: false,
  goalsError: false,
  goalEditError: false,
  goalDeleteError: false,
  habitEditError: false,
  habitDeleteError: false,
  goals: [],
};

/* CURRENT  ***LOCAL*** GOAL SCHEMA
  goals: [
    name: ...,
    end_date: ...,
    start_date: ...,
    id: firestore_id (in collection)
    habits: [
      {
        name: ...,
        notification_time: ...,
        id: firetstore_id (in collection),
      },
      ...
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
    case EDIT_GOAL_REQUEST:
      return {
        ...state,
        goalEditError: false,
      };
    case EDIT_GOAL_SUCCESS:
      return {
        ...state,
      };
    case EDIT_GOAL_FAILURE:
      return {
        ...state,
        goalEditError: true,
      };
    case DELETE_GOAL_REQUEST:
      return {
        ...state,
        goalDeleteError: false,
      };
    case DELETE_GOAL_SUCCESS:
      return {
        ...state,
      };
    case DELETE_GOAL_FAILURE:
      return {
        ...state,
        goalDeleteError: true,
      };
    case EDIT_HABIT_REQUEST:
      return {
        ...state,
        habitEditError: false,
      };
    case EDIT_HABIT_SUCCESS:
      return {
        ...state,
      };
    case EDIT_HABIT_FAILURE:
      return {
        ...state,
        habitEditError: true,
      };
    case DELETE_HABIT_REQUEST:
      return {
        ...state,
        habitDeleteError: false,
      };
    case DELETE_HABIT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_HABIT_FAILURE:
      return {
        ...state,
        habitDeleteError: true,
      };
    default:
      return state;
  }
};

export default UserReducer;

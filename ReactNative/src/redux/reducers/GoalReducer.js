import {
  GET_GEN_HABIT_REQUEST,
  GET_GEN_HABIT_SUCCESS,
  GET_GEN_HABIT_FAILURE,
  PUSH_GEN_HABIT_REQUEST,
  PUSH_GEN_HABIT_SUCCESS,
  PUSH_GEN_HABIT_FAILURE,
  EDIT_GEN_HABIT_REQUEST,
  EDIT_GEN_HABIT_SUCCESS,
  EDIT_GEN_HABIT_FAILURE,
  DELETE_GEN_HABIT_REQUEST,
  DELETE_GEN_HABIT_SUCCESS,
  DELETE_GEN_HABIT_FAILURE,
} from "../actions/Types";

const InitGoalState = {
  isInit: false,
  initError: false,

  loadedGenGoals: false,
  genGoalsError: false,
  genGoalPushError: false,
  genGoalEditError: false,
  genGoalDeleteError: false,

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
    generalGoals: [
        habit: [
            {
            name: ...,
            notification_time: ...,
            id: firetstore_id (in collection),
            },
            ...
        ],
        ...
    ]
*/

const GoalReducer = (state = InitGoalState, action) => {
  switch (action.type) {
    case GET_GEN_HABIT_REQUEST:
      return {
        ...state,
        genGoalsError: false,
      };
    case GET_GEN_HABIT_SUCCESS:
      return {
        ...state,
        loadedGenGoals: true,
        genGoals: action.genGoals,
      };
    case GET_GEN_HABIT_FAILURE:
      return {
        ...state,
        genGoalsError: true,
      };
    case PUSH_GEN_HABIT_REQUEST:
      return {
        ...state,
        genGoalPushError: false,
      };
    case PUSH_GEN_HABIT_SUCCESS:
      return {
        ...state,
      };
    case PUSH_GEN_HABIT_FAILURE:
      return {
        ...state,
        genGoalPushError: true,
      };
    case EDIT_GEN_HABIT_REQUEST:
      return {
        ...state,
        genGoalEditError: false,
      };
    case EDIT_GEN_HABIT_SUCCESS:
      return {
        ...state,
      };
    case EDIT_GEN_HABIT_FAILURE:
      return {
        ...state,
        genGoalEditError: true,
      };
    case DELETE_GEN_HABIT_REQUEST:
      return {
        ...state,
        genGoalDeleteError: false,
      };
    case DELETE_GEN_HABIT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_GEN_HABIT_FAILURE:
      return {
        ...state,
        genGoalDeleteError: true,
      };
    default:
      return state;
  }
};

export default GoalReducer;

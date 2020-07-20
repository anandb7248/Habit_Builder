import { db } from "../../utils/firebase";
// NOTE: these are the actions for getting, pushing/dispatching, editing
// and deleting
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
} from "./Types";

const GENERAL_HABITS_COLLECTION = "habits";

const requestGenGoals = () => {
  return {
    type: GET_GEN_HABIT_REQUEST,
  };
};

const recieveGenGoals = (genGoals) => {
  return {
    type: GET_GEN_HABIT_SUCCESS,
    genGoals,
  };
};

const genGoalsError = () => {
  return {
    type: GET_GEN_HABIT_FAILURE,
  };
};

const pushGenGoalRequest = () => {
  return {
    type: PUSH_GEN_HABIT_REQUEST,
  };
};

const pushGenGoalSuccess = () => {
  return {
    type: PUSH_GEN_HABIT_SUCCESS,
  };
};

const pushGenGoalFailure = () => {
  return {
    type: PUSH_GEN_HABIT_FAILURE,
  };
};

const editGenGoalRequest = () => {
  return {
    type: EDIT_GEN_HABIT_REQUEST,
  };
};

const editGenGoalSuccess = () => {
  return {
    type: EDIT_GEN_HABIT_SUCCESS,
  };
};

const editGenGoalFailure = () => {
  return {
    type: EDIT_GEN_HABIT_FAILURE,
  };
};

const deleteGenGoalRequest = () => {
  return {
    type: DELETE_GEN_HABIT_REQUEST,
  };
};

const deleteGenGoalSuccess = () => {
  return {
    type: DELETE_GEN_HABIT_SUCCESS,
  };
};

const deleteGenGoalFailure = () => {
  return {
    type: DELETE_GEN_HABIT_FAILURE,
  };
};

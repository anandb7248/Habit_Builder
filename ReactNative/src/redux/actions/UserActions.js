import { db } from "../../utils/firebase";
import {
  INIT_USER_REQUEST,
  INIT_USER_SUCCESS,
  INIT_USER_FAILURE,
} from "./Types";

const initRequest = () => {
  return {
    type: INIT_USER_REQUEST,
  };
};

const initSuccess = () => {
  return {
    type: INIT_USER_SUCCESS,
  };
};

const initFailure = () => {
  return {
    type: INIT_USER_FAILURE,
  };
};

export const initUser = () => (dispatch) => {
  dispatch(initRequest());

  /* INIT authenticated user in firestore db */
};

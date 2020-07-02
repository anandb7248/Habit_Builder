import { db } from "../../utils/firebase";
import {
  INIT_USER_REQUEST,
  INIT_USER_SUCCESS,
  INIT_USER_FAILURE,
} from "./Types";

const USER_COLLECTION = "users";

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

/* Called after sign in with email password in actions */
const startInit = (dispatch, new_user) => {
  console.log("INITING USER");
  console.log(new_user);
  db.collection(USER_COLLECTION)
    .doc(new_user.uid)
    .set(
      {
        email: new_user.email,
      },
      { merge: true }
    )
    .then(() => {
      dispatch(initSuccess());
    })
    .catch(() => {
      dispatch(initFailure());
    });
};

export const initUser = (uid) => async (dispatch) => {
  dispatch(initRequest());
  startInit(dispatch, uid);
  /* INIT authenticated user in firestore db */
};

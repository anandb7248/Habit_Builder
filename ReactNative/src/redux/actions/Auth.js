import firebase from '@react-native-firebase/app'
import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_SUCCESS,
  VERIFY_REQUEST,
} from "./Types";


/*
  These functions return the action types that our reducers will read. 
*/

const requestLogin = () => {
    return {
      type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
      type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
      type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

/*
  Login thunk -> takes in credentials from login component as well
  as the dispatch function that is passed to all our actions we init
  from components.
*/

export const loginUser = (email, password) => dispatch => {
  /* alerts our store that a user is logging in */
  dispatch(requestLogin());
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    dispatch(receiveLogin(user));
  })
  .catch(error => {
    dispatch(loginError());
  });
};

/*
  Logout thunk -> logs auth user out of firebase
*/
export const logoutUser = () => dispatch => {
  /* Notify store of logout request */
  dispatch(requestLogout());
  firebase.auth().signOut()
  .then(() => {
    dispatch(receiveLogout());
  })
  .catch(error => {
    dispatch(logoutError());
  })
}

/*
  Auth State Change thunk -> calls firebase .onAuthStateChange function
  which looks for a preexisting user session and re-establishes it. This
  will happen on refresh. Method also sets up a listener while the app is 
  running to change user session tokens when they expire. 
*/

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      /*
        We check if user is null because we only want to log 
        someone in if firebase finds a user session.
      */
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

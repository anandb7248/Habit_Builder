// import firebase from "@react-native-firebase/app";
import * as GoogleSignIn from "expo-google-sign-in";
import { auth, fbProvider } from "../../utils/firebase";
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
} from "./Types";
import { initUser } from "./UserActions";

/*
  These functions return the action types that our reducers will read. 
*/

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};

/*
  Google Login Thunk -> uses expo google sign in to open
  a modal screen with options to sign in to user's
  google account. User object is fetched from 
  async call.
*/

const initAsync = async () => {
  /* 
    Dont need config options here because we configured
    googleServicesFile for android and iOS in app.json
  */

  await GoogleSignIn.initAsync();
};

const signInAsync = async () => {
  try {
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync({
      /*
        Added more config options for android. At this point,
        iOS seems to return a valid user object. 
      */
      //webClientId: "1:570242483391:web:d52c55ff7ffcf7d857b20a",
      /*
        If above doesn't work for android try checking platform and
        adding client id platform specific
      */
      clientId:
        "570242483391-gjujfhie5pg49nl84e8crhp62q6lipom.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
    alert("user: " + user);
    if (type === "success") {
      return user;
    }
  } catch ({ message }) {
    alert("login: Error:" + message);
  }
};

export const googleLoginUser = () => async (dispatch) => {
  try {
    dispatch(requestLogin());
    await initAsync();
    const user = await signInAsync();
    dispatch(
      receiveLogin({
        ...user,
        signedInWithGoogle: true,
      })
    );
  } catch ({ message }) {
    alert(message);
  }
};

/*
  Login thunk -> takes in credentials from login component as well
  as the dispatch function that is passed to all our actions we init
  from components.
*/

const formatUser = (user) => {
  console.log("format user =>", user);
  return {
    uid: user.user.uid,
    email: user.user.email,
    createdAt: user.user.createdAt,
  };
};

export const loginUser = (email, password) => (dispatch) => {
  /* alerts our store that a user is logging in */
  dispatch(requestLogin());
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("LOGIN SUCCESS");

      dispatch(
        receiveLogin({
          ...formatUser(user),
          signedInWithGoogle: false,
        })
      );

      /* Also dispatch init User */
      dispatch(initUser(new_user));
    })
    .catch((error) => {
      console.log("LOGIN FAILURE");
      dispatch(loginError());
    });
};

export const facebookLogin = () => (dispatch) => {
  auth
    .signInWithPopup(fbProvider)
    .then((results) => {
      const token = results.credential.accesssToken;
      var user = result.user;
      dispatch(receiveLogin(user));
    })
    .catch((err) => {
      dispatch(loginError());
      console.log(err);
    });
};
/*
  Logout thunk -> logs auth user out of firebase
*/
export const logoutUser = () => (dispatch) => {
  /* Notify store of logout request */
  dispatch(requestLogout());
  auth
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((error) => {
      dispatch(logoutError());
    });
};

/*
  Auth State Change thunk -> calls firebase .onAuthStateChange function
  which looks for a preexisting user session and re-establishes it. This
  will happen on refresh. Method also sets up a listener while the app is 
  running to change user session tokens when they expire. 
*/

export const verifyAuth = () => (dispatch, getState) => {
  dispatch(verifyRequest());
  auth.onAuthStateChanged((user) => {
    if (user !== null) {
      /*
        We check if user is null because we only want to log 
        someone in if firebase finds a user session.
      */
      dispatch(
        receiveLogin({
          email: user.email,
          uid: user.uid,
          createdAt: user.metadata.a,
        })
      );
    }
    dispatch(verifySuccess());
  });
};

export const signUp = (email, password) => (dispatch) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("sign up successful");
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((err) => {
      console.log(`sign up failed\n${err}`);
      dispatch({ type: SIGNUP_FAILURE });
    });
};

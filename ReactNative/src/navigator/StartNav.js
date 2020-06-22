import { loginUser } from "../redux/actions/AuthActions";
// import { auth, fbProvider } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import LoggedInNav from "./LoggedInNav";
import InitialAppNav from "./InitialAppNav";

// TODO: I think user needs to be defined
function StartNav() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user found");
      return LoggedInNav();
    } else {
      console.log("user not found");
      return InitialAppNav();
    }
  });

  return LoggedInNav();
}

export default StartNav;

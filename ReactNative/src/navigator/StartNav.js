import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import LoggedInNav from "./LoggedInNav";
import InitialAppNav from "./InitialAppNav";

function StartNav() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(`found user: ${user.displayName}`);
      return LoggedInNav();
    } else {
      console.log("user not found");
      return InitialAppNav();
    }
  });

  return LoggedInNav();
}

export default StartNav;

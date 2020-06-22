import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import LoggedInNav from "./LoggedInNav";
import InitialAppNav from "./InitialAppNav";

function StartNav() {
  console.log("startNav");
  let user = firebase.auth().currentUser;

  if (user != null) {
    /* Note: placeholder screen in LoggedInNav for now */
    console.log(`found user: ${user}`);
    return LoggedInNav();
  } else {
    console.log("user not found");
    return InitialAppNav();
  }
}

export default StartNav;

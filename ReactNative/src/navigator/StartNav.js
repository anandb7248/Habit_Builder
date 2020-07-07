import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import LoggedInNav from "./LoggedInNav";
import InitialAppNav from "./InitialAppNav";
import { useDispatch, useSelector } from "react-redux";

function StartNav() {
  console.log("startNav");
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (user !== null || isAuthenticated) {
    /* Note: placeholder screen in LoggedInNav for now */
    console.log(`found user: ${user}`);
    return LoggedInNav();
  } else {
    console.log("user not found");
    return InitialAppNav();
  }
}

export default StartNav;

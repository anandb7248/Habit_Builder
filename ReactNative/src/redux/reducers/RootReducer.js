import { combineReducers } from "redux";
import auth from "./AuthReducer";
import user from "./UserReducer";

const RootReducer = combineReducers({
  auth,
  user,
  // TODO: put goal here
});

export default RootReducer;

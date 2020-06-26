import { combineReducers } from "redux";
import auth from "./AuthReducer";
import user from "./UserReducer";

const RootReducer = combineReducers({
  auth,
  user,
});

export default RootReducer;

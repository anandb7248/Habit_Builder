import { combineReducers } from "redux";
import auth from "./AuthReducer";

const RootReducer = combineReducers({
  auth,
});

export default RootReducer;

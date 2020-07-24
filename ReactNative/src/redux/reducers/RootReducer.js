import { combineReducers } from "redux";
import auth from "./AuthReducer";
import user from "./UserReducer";
import goal from "./GoalReducer";

const RootReducer = combineReducers({
  auth,
  user,
  goal,
});

export default RootReducer;

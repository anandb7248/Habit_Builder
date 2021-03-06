import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/AuthActions";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/*
  This function will init our store, setup our thunk middleware
  and call our verifyAuth() action function to create our Auth State
  Change Listener.
*/
const configureStore = (persistedState) => {
  const store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  store.dispatch(verifyAuth());
  return store;
};

export default configureStore;

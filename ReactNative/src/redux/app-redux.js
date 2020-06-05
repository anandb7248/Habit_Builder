import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { db } from "../utils/firebase";
import { rootReducer } from "./reducers"




//store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export { store };

//Action creator for async, using thunk
const watchPersonData = () => {
  return (dispatch) => {
    db.collection("users")
      .doc("squidward")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const personData = doc.data();
          const actionSetPersonData = setPersonData(personData);
          dispatch(actionSetPersonData);
          console.log("doc.data()");
        } else {
          console.log("document doesn't exist");
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };
};

export { watchPersonData };

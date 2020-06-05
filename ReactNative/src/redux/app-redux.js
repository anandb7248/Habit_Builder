import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { db } from "../utils/firebase";

//initial state
const initialState = {
  personData: {},
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPersonData":
      return { ...state, personData: action.value };
    default:
      return state;
  }
};

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//Action creators
const setPersonData = (personData) => {
  return {
    type: "setPersonData",
    value: personData,
  };
};

export { setPersonData };

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

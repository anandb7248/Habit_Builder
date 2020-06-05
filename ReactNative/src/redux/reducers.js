import { combineReducers } from 'redux';

//initial state
const initialPersonData = {
    personData: {},
};

//reducer
const setPersonData = (state = initialPersonData, action) => {
    switch (action.type) {
      case "setPersonData":
        return { ...state, personData: action.value };
      default:
        return state;
    }
};

const rootReducer = combineReducers({

})

export default rootReducer;
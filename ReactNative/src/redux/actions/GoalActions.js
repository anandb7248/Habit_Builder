import { db } from "../../utils/firebase";
// NOTE: these are the actions for getting, pushing/dispatching, editing
// and deleting
import {
  GET_GEN_HABIT_REQUEST,
  GET_GEN_HABIT_SUCCESS,
  GET_GEN_HABIT_FAILURE,
  PUSH_GEN_HABIT_REQUEST,
  PUSH_GEN_HABIT_SUCCESS,
  PUSH_GEN_HABIT_FAILURE,
  EDIT_GEN_HABIT_REQUEST,
  EDIT_GEN_HABIT_SUCCESS,
  EDIT_GEN_HABIT_FAILURE,
  DELETE_GEN_HABIT_REQUEST,
  DELETE_GEN_HABIT_SUCCESS,
  DELETE_GEN_HABIT_FAILURE,
} from "./Types";

const USER_COLLECTION = "users";
const GENERAL_HABITS_COLLECTION = "general_habits";

const requestGenHabits = () => {
  return {
    type: GET_GEN_HABIT_REQUEST,
  };
};

const recieveGenHabits = (genGoals) => {
  return {
    type: GET_GEN_HABIT_SUCCESS,
    genGoals,
  };
};

const genHabitsError = () => {
  return {
    type: GET_GEN_HABIT_FAILURE,
  };
};

const pushGenHabitRequest = () => {
  return {
    type: PUSH_GEN_HABIT_REQUEST,
  };
};

const pushGenHabitSuccess = () => {
  return {
    type: PUSH_GEN_HABIT_SUCCESS,
  };
};

const pushGenHabitFailure = () => {
  return {
    type: PUSH_GEN_HABIT_FAILURE,
  };
};

const editGenHabitRequest = () => {
  return {
    type: EDIT_GEN_HABIT_REQUEST,
  };
};

const editGenHabitSuccess = () => {
  return {
    type: EDIT_GEN_HABIT_SUCCESS,
  };
};

const editGenHabitFailure = () => {
  return {
    type: EDIT_GEN_HABIT_FAILURE,
  };
};

const deleteGenHabitRequest = () => {
  return {
    type: DELETE_GEN_HABIT_REQUEST,
  };
};

const deleteGenHabitSuccess = () => {
  return {
    type: DELETE_GEN_HABIT_SUCCESS,
  };
};

const deleteGenHabitFailure = () => {
  return {
    type: DELETE_GEN_HABIT_FAILURE,
  };
};

/**
 * [] startInit
 * [x] extractHabit - extractGenHabit
 * [x] getHabits - getGenHabit
 * [x] formatHabit - formatGenHabit
 * [] editHabit - editGenHabit
 * [] deleteHabit - deleteGenHabit
 * [] pushHabit - pushGenHabit
 */

/*
  Function used to extract what habit properties
  we want from the object stored in our firestore db
*/
// const extractGenHabit = (doc) => {
//   return {
//     id: doc.id,
//     name: doc.data().name,
//     notification_time: doc.data().notification_time,
//   };
// };

// const formatGenHabit = (habit) => {
//   return {
//     name: habit.name,
//     notification_time: habit.notification_time,
//   };
// };

// export const editGenHabit = (new_habit, gen_habit_id) => (dispatch, getState) => {
//   dispatch(editGenHabitRequest());
//   const uid = getState().auth.user.uid;
//   db.collection(USER_COLLECTION)
//     .doc(uid)
//     .collection(GENERAL_HABITS_COLLECTION)
//     .doc(gen_habit_id)
//     .collection(HABITS_COLLECTION)
//     .doc(new_habit.id)
//     .update(formatHabit(new_habit))
//     .then(() => {
//       dispatch(editHabitSuccess());
//       dispatch(getGoals());
//     })
//     .catch((err) => dispatch(editHabitFailure()));
// };

// const getGenHabit = async (doc) => {
//   return doc.ref
//     .collection(GENERAL_HABITS_COLLECTION)
//     .get()
//     .then((snapshot) => {
//       return snapshot.docs.map((doc) => extractGenHabit(doc));
//     })
//     .catch(() => {
//       console.log("Error retrieving general habits");
//     });
// };

export const pushGenHabit = (genHabit) => async (dispatch, getState) => {
  dispatch(pushGenHabitRequest());
  const uid = getState().auth.user.uid;
  console.log("Im in GoalAcitons!");
  console.log("user: " + uid);

  /*
    First lets push the goal document to our db.
    After we have pushed the goal document,
    loop through the array of habits and push each 
    new habit document.
    We await the entire block of async requests using Promise.all()
  */
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GENERAL_HABITS_COLLECTION)
    .add({
      name: genHabit.name,
      end_date: genHabit.end_date,
      start_date: genHabit.start_date,
    })
    .then(async (docRef) => {
      //   /* add habit collection */
      //   await Promise.all(
      //     genHabit.habits.map((habit) => {
      //       docRef.collection(HABITS_COLLECTION).add({
      //         name: habit.name,
      //         notification_time: habit.notification_time,
      //       });
      //     })
      //   );
      dispatch(pushGenHabitSuccess());
      dispatch(getGenHabit());
      console.log("ASYNC");
    })
    .catch((error) => {
      dispatch(pushGenHabitFailure());
      console.log("Push Failed");
    });
};

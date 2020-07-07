import { db } from "../../utils/firebase";
import {
  INIT_USER_REQUEST,
  INIT_USER_SUCCESS,
  INIT_USER_FAILURE,
  GET_GOALS_REQUEST,
  GET_GOALS_SUCCESS,
  GET_GOALS_FAILURE,
  PUSH_GOAL_FAILURE,
  PUSH_GOAL_REQUEST,
  PUSH_GOAL_SUCCESS,
  EDIT_GOAL_REQUEST,
  EDIT_GOAL_SUCCESS,
  EDIT_GOAL_FAILURE,
  DELETE_GOAL_REQUEST,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_FAILURE,
  PUSH_HABIT_REQUEST,
  PUSH_HABIT_SUCCESS,
  PUSH_HABIT_FAILURE,
  EDIT_HABIT_REQUEST,
  EDIT_HABIT_FAILURE,
  EDIT_HABIT_SUCCESS,
  DELETE_HABIT_REQUEST,
  DELETE_HABIT_FAILURE,
  DELETE_HABIT_SUCCESS,
} from "./Types";

const USER_COLLECTION = "users";
const GOALS_COLLECTION = "goals";
const HABITS_COLLECTION = "habits";

const initRequest = () => {
  return {
    type: INIT_USER_REQUEST,
  };
};

const initSuccess = () => {
  return {
    type: INIT_USER_SUCCESS,
  };
};

const initFailure = () => {
  return {
    type: INIT_USER_FAILURE,
  };
};

const pushGoalRequest = () => {
  return {
    type: PUSH_GOAL_REQUEST,
  };
};

const pushGoalSuccess = () => {
  return {
    type: PUSH_GOAL_SUCCESS,
  };
};

const pushGoalFailure = () => {
  return {
    type: PUSH_GOAL_FAILURE,
  };
};

const receiveGoals = (goals) => {
  return {
    type: GET_GOALS_SUCCESS,
    goals,
  };
};

const goalsError = () => {
  return {
    type: GET_GOALS_FAILURE,
  };
};

const requestGoals = () => {
  return {
    type: GET_GOALS_REQUEST,
  };
};

const editGoalRequest = () => {
  return {
    type: EDIT_GOAL_REQUEST,
  };
};

const editGoalSuccess = () => {
  return {
    type: EDIT_GOAL_SUCCESS,
  };
};

const editGoalFailure = () => {
  return {
    type: EDIT_GOAL_FAILURE,
  };
};

const deleteGoalRequest = () => {
  return {
    type: DELETE_GOAL_REQUEST,
  };
};

const deleteGoalSuccess = () => {
  return {
    type: DELETE_GOAL_SUCCESS,
  };
};

const deleteGoalFailure = () => {
  return {
    type: DELETE_GOAL_FAILURE,
  };
};

const editHabitRequest = () => {
  return {
    type: EDIT_HABIT_REQUEST,
  };
};

const editHabitSuccess = () => {
  return {
    type: EDIT_HABIT_SUCCESS,
  };
};

const editHabitFailure = () => {
  return {
    type: EDIT_HABIT_FAILURE,
  };
};

const deleteHabitRequest = () => {
  return {
    type: DELETE_HABIT_REQUEST,
  };
};

const deleteHabitSuccess = () => {
  return {
    type: DELETE_HABIT_SUCCESS,
  };
};

const deleteHabitFailure = () => {
  return {
    type: DELETE_HABIT_FAILURE,
  };
};

const pushHabitRequest = () => {
  return {
    type: PUSH_HABIT_REQUEST,
  };
};

const pushHabitSuccess = () => {
  return {
    type: PUSH_HABIT_SUCCESS,
  };
};

const pushHabitFailure = () => {
  return {
    type: PUSH_HABIT_FAILURE,
  };
};

/* Called after sign in with email password in actions */
const startInit = (dispatch, new_user) => {
  console.log("INITING USER");
  console.log(new_user);
  db.collection(USER_COLLECTION)
    .doc(new_user.uid)
    .set(
      {
        email: new_user.email,
      },
      { merge: true }
    )
    .then(() => {
      dispatch(initSuccess());
    })
    .catch(() => {
      dispatch(initFailure());
    });
};

/*
  Function used to extract what habit properties
  we want from the object stored in our firestore db
*/
const extractHabit = (doc) => {
  return {
    id: doc.id,
    name: doc.data().name,
    notification_time: doc.data().notification_time,
  };
};

/*
  Function for extracting properties from goal object
  in firestore db
*/
const extractGoal = (doc) => {
  return {
    id: doc.id,
    name: doc.data().name,
    end_date: doc.data().end_date,
    start_date: doc.data().start_date,
  };
};

const getHabits = async (doc) => {
  return doc.ref
    .collection(HABITS_COLLECTION)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => extractHabit(doc));
    })
    .catch(() => {
      console.log("Error retrieving habits");
    });
};

/*
  Format functions used to format local goal & habit schema
  into firestore schema (omit id's)...
*/

const formatGoal = (goal) => {
  return {
    name: goal.name,
    start_date: goal.start_date,
    end_date: goal.end_date,
  };
};

const formatHabit = (habit) => {
  return {
    name: habit.name,
    notification_time: habit.notification_time,
  };
};

export const editHabit = (new_habit, goal_id) => (dispatch, getState) => {
  dispatch(editHabitRequest());
  const uid = getState().auth.user.uid;
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .doc(goal_id)
    .collection(HABITS_COLLECTION)
    .doc(new_habit.id)
    .update(formatHabit(new_habit))
    .then(() => {
      dispatch(editHabitSuccess());
      dispatch(getGoals());
    })
    .catch((err) => dispatch(editHabitFailure()));
};

export const deleteHabit = (habit_id, goal_id) => (dispatch, getState) => {
  dispatch(deleteHabitRequest());
  const uid = getState().auth.user.uid;
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .doc(goal_id)
    .collection(HABITS_COLLECTION)
    .doc(habit_id)
    .delete()
    .then(() => {
      dispatch(deleteHabitSuccess());
      dispatch(getGoals());
    })
    .catch((err) => dispatch(deleteHabitFailure()));
};

export const editGoal = (new_goal) => (dispatch, getState) => {
  dispatch(editGoalRequest());
  const uid = getState().auth.user.uid;
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .doc(new_goal.id)
    .update(formatGoal(new_goal))
    .then(() => {
      dispatch(editGoalSuccess());
      dispatch(getGoals());
    })
    .catch((err) => dispatch(editGoalFailure()));
};

export const deleteGoal = (goal_id) => (dispatch, getState) => {
  dispatch(deleteGoalRequest());
  const uid = getState().auth.user.uid;
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .doc(goal_id)
    .delete()
    .then(() => {
      dispatch(deleteGoalSuccess());
      dispatch(getGoals());
    })
    .catch((err) => dispatch(deleteGoalFailure()));
};

/* right way to do await... */
export const getGoals = () => async (dispatch, getState) => {
  dispatch(requestGoals());
  const uid = getState().auth.user.uid;
  const goalDocs = await db
    .collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .get()
    .catch(() => {
      dispatch(goalsError());
    });

  let goals = [];
  for (const doc of goalDocs.docs) {
    const habits = await getHabits(doc);
    goals.push({
      ...extractGoal(doc),
      habits,
    });
  }
  dispatch(receiveGoals(goals));
};

export const initUser = () => async (dispatch, getState) => {
  dispatch(initRequest());
  startInit(dispatch, getState().auth.user.uid);
  /* INIT authenticated user in firestore db */
};

/*
  Used for creating habits on existing goals
*/
export const pushHabit = (habit, goal_id) => async (dispatch, getState) => {
  dispatch(pushHabitRequest());
  const uid = getState().auth.user.uid;
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .doc(goal_id)
    .collection(HABITS_COLLECTION)
    .add(formatHabit(habit))
    .then(() => {
      dispatch(pushHabitSuccess());
      dispatch(getGoals());
    })
    .catch((err) => dispatch(pushHabitFailure()));
};

/* 
  action creator for pushing new goals
  goal schema as exists in firestore (NOT LOCAL) => {
    name: ...
    start_date: epoch...
    end_date: epoch...
    habits: [
      {
        name: ...,
        notification_time: ... (format?)
      },
      ...
    ]
  } 
 */
export const pushGoal = (goal) => async (dispatch, getState) => {
  dispatch(pushGoalRequest());
  const uid = getState().auth.user.uid;
  /*
    First lets push the goal document to our db.
    After we have pushed the goal document,
    loop through the array of habits and push each 
    new habit document.
    We await the entire block of async requests using Promise.all()
  */
  db.collection(USER_COLLECTION)
    .doc(uid)
    .collection(GOALS_COLLECTION)
    .add({
      name: goal.name,
      end_date: goal.end_date,
      start_date: goal.start_date,
    })
    .then(async (docRef) => {
      /* add habit collection */
      await Promise.all(
        goal.habits.map((habit) => {
          docRef.collection(HABITS_COLLECTION).add({
            name: habit.name,
            notification_time: habit.notification_time,
          });
        })
      );
      dispatch(pushGoalSuccess());
      dispatch(getGoals());
    })
    .catch((error) => {
      dispatch(pushGoalFailure());
    });
};

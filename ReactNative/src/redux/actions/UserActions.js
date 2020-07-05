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

/* 
  action creator for pushing new goals
  goal schema => {
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
export const pushGoal = (goal, uid) => (dispatch) => {
  dispatch(pushGoalRequest());
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
        goals.habits.map((habit) => {
          docRef.collection(HABITS_COLLECTION).add({
            name: habit.name,
            notification_time: habit.notification_time,
          });
        })
      );

      dispatch(pushGoalSuccess());
      dispatch(getGoals(uid));
    })
    .catch((error) => {
      dispatch(pushGoalFailure());
    });
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

const getHabits = async (doc) => {
  return doc.ref
    .collection(HABITS_COLLECTION)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return {
          name: doc.data().name,
        };
      });
    })
    .catch(() => {
      console.log("Error retrieving habits");
    });
};

/* right way to do await... */
export const getGoals = (uid) => async (dispatch) => {
  dispatch(requestGoals());
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
      name: doc.data().name,
      habits: habits,
    });
  }
  dispatch(receiveGoals(goals));
};

export const initUser = (uid) => async (dispatch) => {
  dispatch(initRequest());
  startInit(dispatch, uid);
  /* INIT authenticated user in firestore db */
};

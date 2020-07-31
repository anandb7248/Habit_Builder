import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import { logoutUser } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, pushGoal } from "../redux/actions/UserActions";
import { getGenHabit, pushGenHabit } from "../redux/actions/GoalActions";
import GoalsScreen from "./GoalsScreen";
import COLORS from "../styles/Colors";

const test_goal = {
  // name: "Test Goal Push - #2",
  // end_date: 1292031,
  // start_date: 1493944,
  // habits: [
  // {
  name: "Go to sleep early",
  notification_time: "3:40AM",
  //   },
  //   {
  //     name: "habit 5",
  //     notification_time: "midnight",
  //   },
  //   {
  //     name: "habit 6",
  //     notification_time: "morning",
  //   },
  // ],
};

const TodayView = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.View``;

const HabitContainer = styled.View``;

const TodayScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const isGoalsLoaded = useSelector((state) => state.user.loadedGoals);
  const goals = useSelector((state) => state.user.goals);
  const genHabit = useSelector((state) => state.goal.genHabit);

  /* Tell Store to get goals only once ... */
  useEffect(() => {
    console.log("getting goals" + user.uid);
    dispatch(getGenHabit());
  }, []);

  // useEffect(() => {
  //   // console.log("Test goal Push w/ \n" + test_goal + "\n" + user.id);
  //   dispatch(pushGenHabit(test_goal, user.uid));
  // }, []);

  useEffect(() => {
    console.log("Received Goals!\n", genHabit);
  }, [genHabit]);

  const formatGoals = () => {
    return (
      <Container>
        {goals.map((goal) => {
          return (
            <Container key={goal.name}>
              <ModButton
                key={goal.name}
                height="5%"
                width="90%"
                fontSize="4%"
                color={COLORS.appBlue}
                fontColor={COLORS.appYelow}
                text={goal.name}
              />
              <HabitContainer key={goal.name}>
                {goal.habits.map((habit) => {
                  return (
                    <ModButton
                      key={habit.name}
                      height="5%"
                      width="90%"
                      fontSize="3%"
                      text={habit.name}
                    />
                  );
                })}
              </HabitContainer>
            </Container>
          );
        })}
      </Container>
    );
  };

  const goalsPlaceHolder = () => {
    return (
      <ModButton height="5%" width="90%" fontSize="3%" text="No Goals Yet :(" />
    );
  };

  return (
    <TodayView>
      <PageHeader
        text="TODAY"
        hasHeader={Platform.OS === "android" ? false : true}
      />
      <Divider />
      {isGoalsLoaded ? formatGoals() : goalsPlaceHolder()}
    </TodayView>
  );
};

export default TodayScreen;

import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import { logoutUser } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, pushGoal } from "../redux/actions/UserActions";
import GoalsScreen from "./GoalsScreen";
import COLORS from "../styles/Colors";

const test_goal = {
  name: "Test Goal Push",
  end_date: 1292031,
  start_date: 1493944,
  habits: [
    {
      name: "habit 1",
      notification_time: "noon",
    },
    {
      name: "habit 2",
      notification_time: "midnight",
    },
    {
      name: "habit 3",
      notification_time: "morning",
    },
  ],
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

  /* Tell Store to get goals only once ... */
  useEffect(() => {
    console.log("getting goals" + user.uid);
    dispatch(getGoals());
  }, []);

  // useEffect(() => {
  //   console.log("Test goal Push w/ " + test_goal);
  //   dispatch(pushGoal(test_goal, user.uid));
  // }, []);

  useEffect(() => {
    console.log("Received Goals!", goals);
  }, [goals]);

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

import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import { logoutUser } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { getGoals } from "../redux/actions/UserActions";
import GoalsScreen from "./GoalsScreen";
import COLORS from "../styles/Colors";

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
    dispatch(getGoals(user.uid));
  }, []);

  const formatGoals = () => {
    return (
      <Container>
        {goals.map((goal) => {
          return (
            <Container>
              <ModButton
                height="5%"
                width="90%"
                fontSize="4%"
                color={COLORS.appBlue}
                fontColor={COLORS.appYelow}
                text={goal.name}
              />
              <HabitContainer>
                {goal.habits.map((habit) => {
                  return (
                    <ModButton
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

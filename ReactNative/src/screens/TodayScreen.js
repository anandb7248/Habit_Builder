import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import { logoutUser } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { getGoals } from "../redux/actions/UserActions";

const TodayView = styled.View``;

const TodayScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("getting goals" + user.uid);
    dispatch(getGoals(user.uid));
  }, []);

  return (
    <TodayView>
      <PageHeader
        text="TODAY"
        hasHeader={Platform.OS === "android" ? false : true}
      />
      <Divider />
      <ModButton height="5%" width="90%" fontSize="3%" text="TODAY SCREEN :)" />
    </TodayView>
  );
};

export default TodayScreen;

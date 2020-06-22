import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";

const TodayView = styled.View``;

const TodayScreen = () => {
  return (
    <TodayView>
      <PageHeader
        text="Habit Builder"
        hasHeader={Platform.OS === "android" ? false : true}
      />
      <Divider />
      <ModButton
        height="5%"
        width="90%"
        fontSize="3%"
        text="TEST TODAY SCREEN :)"
      />
    </TodayView>
  );
};

export default TodayScreen;

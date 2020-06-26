import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import styled from "styled-components";
import ModButton from "../components/ModButton";

const GoalsView = styled.View``;

const GoalsScreen = () => {
  return (
    <GoalsView>
      <PageHeader
        text="GOALS"
        hasHeader={Platform.OS === "android" ? false : true}
      />
      <Divider />
      <ModButton height="5%" width="90%" fontSize="3%" text="GOALS SCREEN :)" />
    </GoalsView>
  );
};

export default GoalsScreen;

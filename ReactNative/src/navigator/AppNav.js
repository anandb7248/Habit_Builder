import React, { useState, useEffect } from "react";
import TabLayout from "../components/TabLayout";
import TodayScreen from "../screens/TodayScreen";
import GoalsScreen from "../screens/GoalsScreen";
import styled from "styled-components";
import ModButton from "../components/ModButton";

const PLACEHOLDER = styled.View``;

/*
  CONCERNING ICONS
  Im sourcing these icons from materialdesignicons.com.
  Just grab the name of the icon and place it in object as 
  seen below. 
*/

const AppNav = ({ navigation }) => {
  return (
    <TabLayout
      screens={[
        {
          name: "Today",
          component: TodayScreen,
          iconName: "account-circle",
        },
        {
          name: "Calendar",
          component: PLACEHOLDER,
          iconName: "calendar",
        },
        {
          name: "Add",
          component: PLACEHOLDER,
          iconName: "plus",
        },
        {
          name: "Goals",
          component: GoalsScreen,
          iconName: "trophy",
        },
        {
          name: "Settings",
          component: PLACEHOLDER,
          iconName: "tune",
        },
      ]}
    />
  );
};

export default AppNav;

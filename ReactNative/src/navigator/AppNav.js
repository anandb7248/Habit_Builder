import React, { useState, useEffect } from "react";
import TabLayout from "../components/TabLayout";
import TodayScreen from "../screens/TodayScreen";
import GoalsScreen from "../screens/GoalsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import SettingScreen from "../screens/SettingScreen";


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
          component: CalendarScreen,
          iconName: "calendar",
        },
        {
          name: " ",
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
          component: SettingScreen,
          iconName: "tune",
        },
      ]}
    />
  );
};

export default AppNav;

import React, { useState, useEffect } from "react";
import TabLayout from "../components/TabLayout";
import TodayScreen from "./TodayScreen";
import GoalsScreen from "./GoalsScreen";

const AppNav = () => {
  return (
    <TabLayout
      screens={[
        {
          name: "Today",
          component: TodayScreen,
          iconName: "account-circle",
        },
        {
          name: "Goals",
          component: GoalsScreen,
          iconName: "trophy",
        },
      ]}
    />
  );
};

export default AppNav;

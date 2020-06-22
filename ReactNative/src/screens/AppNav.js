import React, { useState, useEffect } from "react";
import TabLayout from "../components/TabLayout";
import TodayScreen from "./TodayScreen";

const AppNav = () => {
  return (
    <TabLayout
      screens={[
        {
          name: "TestTab",
          component: TodayScreen,
        },
      ]}
    />
  );
};

export default AppNav;

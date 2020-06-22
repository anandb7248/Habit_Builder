import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

/*
    Expects list of screens in following format:
    [
        {
            name: "name",
            component: COMPONENT
        }
        ...
    ]
*/
function TabLayout(props) {
  return (
    <Tab.Navigator>
      {props.screens.map((screen) => {
        return <Tab.Screen name={screen.name} component={screen.component} />;
      })}
    </Tab.Navigator>
  );
}

export default TabLayout;

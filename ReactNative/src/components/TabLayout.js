import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../styles/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const createTabScreen = (screen) => {
  const tabOptions = {
    activeTintColor: COLORS.appBlue,
    /* tabBarIcon expects function that returns icon */
    tabBarIcon: () => (
      <MaterialCommunityIcons
        name={screen.iconName}
        color={COLORS.appBlue}
        size={30}
      />
    ),
  };

  const styleOptions = {
    /* Optional Styling here */
    color: COLORS.appBlue,
  };

  return (
    <Tab.Screen
      options={tabOptions}
      style={styleOptions}
      labelStyle={styleOptions}
      name={screen.name}
      component={screen.component}
    />
  );
};

/*
    Expects list of screens in following format:
    [
        {
            name: "name",
            component: COMPONENT,
            icon : ICON
        }
        ...
    ]
*/
function TabLayout(props) {
  return (
    <Tab.Navigator>
      {props.screens.map((screen) => createTabScreen(screen))}
    </Tab.Navigator>
  );
}

export default TabLayout;

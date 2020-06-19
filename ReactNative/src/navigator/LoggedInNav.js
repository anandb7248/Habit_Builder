import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import SetGoalScreen from "../screens/SetGoalScreen";
import SetHabitScreen from "../screens/SetHabitScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { Platform } from "react-native";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import COLORS from "../styles/Colors";
const Stack = createStackNavigator();

function LoggedInNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "",
          headerShown: Platform.OS === "android" ? false : true,
          headerStyle: {
            backgroundColor: COLORS.appBlue,
          },
          headerTintColor: COLORS.appYelow,
        }}
      />
    </Stack.Navigator>
  );
}

export default LoggedInNav;

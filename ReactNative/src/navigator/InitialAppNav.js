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

function InitialAppNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetGoalScreen"
        component={SetGoalScreen}
        options={{ headerShown: false, title: "Set Goal" }}
      />
      <Stack.Screen
        name="SetHabitScreen"
        component={SetHabitScreen}
        options={{
          title: "",
          headerShown: Platform.OS === "android" ? false : true,
          headerStyle: {
            backgroundColor: COLORS.appBlue,
          },
          headerTintColor: COLORS.appYelow,
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false, title: "Sign Up" }}
      />
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

export default InitialAppNav;

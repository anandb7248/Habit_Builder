import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import SetGoalScreen from "../screens/SetGoalScreen";
import SetHabitScreen from "../screens/SetHabitScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createStackNavigator();

function InitialAppNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetGoal"
        component={SetGoalScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetHabit"
        component={SetHabitScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default InitialAppNav;

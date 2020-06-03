import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import SetGoalScreen from "../screens/SetGoalScreen";

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
    </Stack.Navigator>
  );
}

export default InitialAppNav;

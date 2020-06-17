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
import { loginUser } from "../redux/actions/AuthActions";
// import { auth, fbProvider } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Stack = createStackNavigator();

function checkIfLoggedIn() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user was found to be logged in");
      // IsLoggedIn();
    } else {
      console.log("user was not found");
      // InitialAppNav();
    }
  });
}

function IsLoggedIn() {
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

function InitialAppNav() {
  checkIfLoggedIn();

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

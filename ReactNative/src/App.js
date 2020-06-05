import React, { useState } from "react";
import OnboardingScreen from "./screens/OnboardingScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SetGoalScreen from "./screens/SetGoalScreen";
import SetHabitScreen from "./screens/SetHabitScreen";
import SignUpScreen from "./screens/SignUpScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import InitialAppNav from "./navigator/InitialAppNav";
import LoginScreen from "./screens/LoginScreen";

const getFont = () =>
  Font.loadAsync({
    "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    // return <OnboardingScreen />;
    // return <NotificationScreen />;
    // return <SetGoalScreen />;
    //return <SignUpScreen />;
    return <LoginScreen/>;
    // return <SetHabitScreen />;
    // return (
    //   <NavigationContainer>
    //     <InitialAppNav />
    //   </NavigationContainer>
    // );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

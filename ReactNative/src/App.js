import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SetGoalScreen from "./screens/SetGoalScreen";
import SetHabitScreen from "./screens/SetHabitScreen";
import SignUpScreen from "./screens/SignUpScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import InitialAppNav from "./navigator/InitialAppNav";
import { decode, encode } from "base-64";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import LoginScreen from "./screens/LoginScreen";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const getFont = () =>
  Font.loadAsync({
    "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
  });

const store = configureStore();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    //return <OnboardingScreen />;
    //return <NotificationScreen />;
    // return <SetGoalScreen />;
    //return <SignUpScreen />;
    // return <LoginScreen />;
    //return <SetHabitScreen />;
    // return (
    //   <Provider store={store}>
    //     <LoginScreen />
    //   </Provider>
    // );
    return (
      <Provider store={store}>
        <NavigationContainer>
          <InitialAppNav />
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

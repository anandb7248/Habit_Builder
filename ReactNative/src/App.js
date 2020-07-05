import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SetGoalScreen from "./screens/SetGoalScreen";
import SetHabitScreen from "./screens/SetHabitScreen";
import EditHabitScreen from "./screens/EditHabitScreen";
import SignUpScreen from "./screens/SignUpScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import InitialAppNav from "./navigator/InitialAppNav";
import StartNav from "./navigator/StartNav";
import { decode, encode } from "base-64";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import LoginScreen from "./screens/LoginScreen";
import AppNav from "./navigator/AppNav";
import CalendarScreen from "./screens/CalendarScreen";

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

export default function App({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNav />
        </NavigationContainer>
      </Provider>
    );

    // return (
    //   <Provider store={store}>
    //     <NavigationContainer>
    //       <StartNav />
    //     </NavigationContainer>
    //   </Provider>
    // );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

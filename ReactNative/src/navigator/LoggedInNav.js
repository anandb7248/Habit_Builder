import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import AppNav from "../navigator/AppNav";
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
<<<<<<< Updated upstream
      <Stack.Screen
        name="MainScreen"
        component={AppNav}
        options={{
          title: "",
          headerShown: false,
        }}
      />
=======
      <Stack.Screen name="MainScreen" component={AppNav} />
>>>>>>> Stashed changes
    </Stack.Navigator>
  );
}

export default LoggedInNav;

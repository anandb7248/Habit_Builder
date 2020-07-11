import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Modal from "../components/Modal";
import TabLayout from "../components/TabLayout";
import TodayScreen from "../screens/TodayScreen";
import GoalsScreen from "../screens/GoalsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../components/TabLayout";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import SettingScreen from "../screens/SettingScreen";
<<<<<<< Updated upstream
import { createStackNavigator } from "@react-navigation/stack";
import GoalScreen from "../screens/SetGoalScreen";
import HabitScreen from "../screens/SetHabitScreen";
=======
>>>>>>> Stashed changes

const PLACEHOLDER = styled.View``;

/*
  CONCERNING ICONS
  Im sourcing these icons from materialdesignicons.com.
  Just grab the name of the icon and place it in object as 
  seen below. 
*/

const ModalContainer = () => <View style={{ flex: 1 }} />;

const Tabs = ({ navigation }) => {
  return (
    <TabLayout
      screens={[
        {
          name: "Today",
          component: TodayScreen,
          iconName: "account-circle",
        },
        {
          name: "Calendar",
          component: CalendarScreen,
          iconName: "calendar",
        },
        {
          name: " ",
          component: ModalContainer,
          iconName: "plus",
          listeners: ({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Modal");
            },
          }),
        },
        {
          name: "Goals",
          component: GoalsScreen,
          iconName: "trophy",
        },
        {
          name: "Settings",
          component: SettingScreen,
          iconName: "tune",
        },
        {
          name: "LoginScreen",
          component: LoginScreen,
        },
      ]}
    />
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen
        name="Modal"
        component={Modal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp",
                }),
              },
            };
          },
        }}
      />
      <RootStack.Screen name="CreateHabit" component={HabitScreen} />
      <RootStack.Screen name="CreateGoal" component={GoalScreen} />
    </RootStack.Navigator>
  );
};

const AppNav = ({ navigation }) => {
  return;
};

// export default AppNav;

export default () => {
  return (
    // <NavigationContainer>
    <RootStackScreen />
    // </NavigationContainer>
  );
};

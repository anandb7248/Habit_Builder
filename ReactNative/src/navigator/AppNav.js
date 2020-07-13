import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Modal from "../components/Modal";
import TabLayout from "../components/TabLayout";
import TodayScreen from "../screens/TodayScreen";
import GoalsScreen from "../screens/GoalsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import styled from "styled-components";
import ModButton from "../components/ModButton";
import SettingScreen from "../screens/SettingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import GoalScreen from "../screens/SetGoalScreen";
import HabitScreen from "../screens/SetHabitScreen";
import LoggedInNav from "../navigator/LoggedInNav";
import { RotationGestureHandler } from "react-native-gesture-handler";

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
      ]}
    />
  );
};

function ModalOptions() {
  return {
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
  };
}

const Stack = createStackNavigator();
function AppNav({ navigation }) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Modal" component={Modal} options={ModalOptions} />
      <Stack.Screen name="CreateHabit" component={HabitScreen} />
      <Stack.Screen name="CreateGoal" component={GoalScreen} />
      <Stack.Screen name="LoggedInNav" component={LoggedInNav} />
    </Stack.Navigator>
  );
}

export default AppNav;

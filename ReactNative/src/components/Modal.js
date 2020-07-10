import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ModButton from "./ModButton";

export default ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => navigation.pop()}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 75,
    }}
  >
    <ModButton
      text="New Goals"
      spacing="3"
      width="45%"
      height="7%"
      fontSize="3%"
      onPress={() => {
        navigation.pop();
        navigation.navigate("CreateGoal");
      }}
    />
    <ModButton
      text="New Habits"
      spacing="3"
      width="45%"
      height="7%"
      fontSize="3%"
      onPress={() => {
        navigation.pop();
        navigation.navigate("CreateHabit");
      }}
    />
  </TouchableOpacity>
);

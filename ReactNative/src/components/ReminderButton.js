import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet } from "react-native";

function ReminderButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ReminderButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 246,
    borderRadius: 25,
  },
});

const View = styled.View`
  background-color: white;
  height: 50px;
  width: 246px;
  border-radius: 25px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-size: 24px;
  font-family: PTSans-Regular;
`;

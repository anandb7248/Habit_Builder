import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

function ReminderButton(props) {
  return (
    <TouchableOpacity>
      <View>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ReminderButton;

const View = styled.View`
  background-color: white;
  height: 50px;
  width: 246px;
  margin: 20px auto;
  border-radius: 25px;
  padding-horizontal: 20px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-size: 24px;
`;

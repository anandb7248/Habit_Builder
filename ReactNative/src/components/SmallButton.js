import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

function SmallButton(props) {
  return (
    <TouchableOpacity>
      <View backgroundColor={props.color}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallButton;

const View = styled.View`
  height: 35px;
  width: 35px;
  margin: 20px auto;
  border-radius: 5px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  font-size: 22px;
`;

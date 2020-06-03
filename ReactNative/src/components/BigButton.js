import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

function BigButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BigButton;

const View = styled.View`
  background-color: white;
  height: 75px;
  width: 320px;
  margin: 20px auto;
  border-radius: 25px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-size: 32px;
  font-family: "PTSans-Regular";
`;

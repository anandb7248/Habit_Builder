import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

function LongButton(props) {
  return (
    <TouchableOpacity>
      <View backgroundColor={props.color}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default LongButton;

const View = styled.View`
  height: 37px;
  width: 347px;
  margin: 20px auto;
  border-radius: 5px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  font-size: 22px;
`;

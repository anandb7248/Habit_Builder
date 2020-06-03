import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";

function LargeTextInput(props) {
  return (
    <View>
      <Icon>{props.children}</Icon>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(text) => props.setInputText(text)}
        value={props.inputText}
      />
    </View>
  );
}

export default LargeTextInput;

const View = styled.View`
  background: white;
  height: 60px;
  width: 350px;
  border-radius: 25px;
  margin: 0px auto 10px;
`;

const TextInput = styled.TextInput`
  color: ${COLORS.appBlue};
  font-size: 22px;
  font-weight: bold;
  margin: auto auto;
  font-family: "PTSans-Regular";
`;

const Icon = styled.View`
  left: 0;
  top: 0;
  position: absolute;
  transform: translate(10px, 10px);
`;

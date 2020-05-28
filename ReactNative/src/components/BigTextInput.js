import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";

function BigTextInput(props) {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(text) => props.setInputText(text)}
        value={props.inputText}
      />
    </View>
  );
}

export default BigTextInput;

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
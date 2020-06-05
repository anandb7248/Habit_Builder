import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function LargeTextInput(props) {
  return (
    <View width={props.width} height={props.height}>
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
  height: ${props => props.height ? hp(props.height) :'60'}px;
  width: ${props => props.width ? wp(props.width) :'350'}px;
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

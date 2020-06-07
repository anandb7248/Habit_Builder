import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
  height: ${hp("7.5%")};
  width: ${wp("85%")};
  /*height: 60px;
  width: 350px;*/
  border-radius: ${wp("7%")}px;
  margin: 0px auto ${hp("1%")}px;
`;

const TextInput = styled.TextInput`
  color: ${COLORS.appBlue};
  font-size: ${wp("5%")};
  font-weight: bold;
  margin: auto auto;
  font-family: "PTSans-Regular";
`;

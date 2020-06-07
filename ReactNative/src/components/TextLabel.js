import React from "react";
import styled from "styled-components";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function TextLabel(props) {
  return <Label>{props.label}</Label>;
}

export default TextLabel;

const Label = styled.Text`
  color: white;
  font-size: ${wp("4%")}px;
  /*margin: 10px auto 5px;*/
  margin: ${hp("2%")}px auto ${hp("1%")}px;
  font-family: "PTSans-Regular";
`;

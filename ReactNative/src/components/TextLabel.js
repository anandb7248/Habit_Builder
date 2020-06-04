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
  font-size: ${wp("4%")};
  margin: 10px auto 5px;
  font-family: "PTSans-Regular";
`;

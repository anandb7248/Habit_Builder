import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

function ModButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View width={props.width} height={props.height} spacing={props.spacing}>
        <Text fontSize={props.fontSize}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ModButton;

const View = styled.View`
  background-color: white;
  height: ${props => props.height ? hp(props.height) : "75"}px;
  width: ${props => props.width ? wp(props.width) : "320"}px;
  margin: ${props => props.spacing ? props.spacing : "20px"} auto;
  border-radius: 25px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-size: ${props => props.fontSize ? hp(props.fontSize) : "32"}px;
  font-family: "PTSans-Regular";
`;

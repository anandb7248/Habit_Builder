import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function BigButton(props) {
  return (
    <TouchableOpacity>
      <View style={{ height: hp("10%"), width: wp("75%") }}>
        <Text style={{ fontSize: RFPercentage(5) }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BigButton;

const View = styled.View`
  background-color: white;
  margin: 20px auto;
  border-radius: 25px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-family: "PTSans-Regular";
`;

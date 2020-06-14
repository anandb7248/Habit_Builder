import React from "react";
import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Divider() {
  return <Line />;
}

export default Divider;

const Line = styled.View`
  width: ${wp("85%")}px;
  margin: ${hp("1%")}px auto;
  height: 1px;
  background-color: white;
`;

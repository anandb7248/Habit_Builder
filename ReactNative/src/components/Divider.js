import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

function Divider() {
  return <Line />;
}

export default Divider;

const Line = styled.View`
  width: ${wp("85%")}px;
  margin: 5px auto;
  height: 1px;
  background-color: white;
`;

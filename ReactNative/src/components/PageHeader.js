import React from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function PageHeader(props) {
  return <HeaderText hasHeader={props.hasHeader}>{props.text}</HeaderText>;
}

export default PageHeader;

const HeaderText = styled.Text`
  font-size: ${hp("6%")};
  color: ${COLORS.appYelow};
  padding: ${(props) => (props.hasHeader ? hp("1%") : hp("5px"))}px 26px 0px;
  margin: 0 auto;
  font-family: "PTSans-Regular";
`;

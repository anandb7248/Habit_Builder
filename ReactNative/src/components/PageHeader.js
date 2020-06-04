import React from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function PageHeader(props) {
  return <HeaderText>{props.text}</HeaderText>;
}

export default PageHeader;

const HeaderText = styled.Text`
  font-size: ${hp("7%")};
  color: ${COLORS.appYelow};
  padding: 50px 26px 0px;
  margin: 0 auto;
  font-family: "PTSans-Regular";
`;

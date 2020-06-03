import React from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

function PageHeader(props) {
  return (
    <HeaderText style={{ fontSize: RFPercentage(7) }}>{props.text}</HeaderText>
  );
}

export default PageHeader;

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  padding: 50px 26px 0px;
  margin: 0 auto;
  font-family: "PTSans-Regular";
`;

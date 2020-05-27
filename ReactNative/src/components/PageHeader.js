import React from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";

function PageHeader(props) {
  return <HeaderText>{props.text}</HeaderText>;
}

export default PageHeader;

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  font-size: 64px;
  padding: 50px 26px 0px;
  margin: 0 auto;
  /* font-family: "PTSans-Regular"; */
`;

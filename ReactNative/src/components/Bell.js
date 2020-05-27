import React from "react";
import styled from "styled-components";

function Bell(props) {
  return <Logo source={require("../assets/images/Bell.png")} />;
}

export default Bell;

// TODO: ask how to resize dynamicaly
const Logo = styled.Image`
  width: 50px;
  height: 50px;
  /* margin: auto; */
  align-items: center;
`;

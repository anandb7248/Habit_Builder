import React from "react";
import styled from "styled-components";

function Bell(props) {
  return <Logo source={require("../assets/images/Bell.png")} />;
}

export default Bell;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin: 149px auto;
`;

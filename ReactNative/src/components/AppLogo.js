import React from "react";
import styled from "styled-components";

function AppLogo(props) {
  return <Logo source={require("../assets/images/AppIcon.png")} />;
}

export default AppLogo;

const Logo = styled.Image`
  width: 300px;
  height: 348px;
  margin: 75px auto;
`;

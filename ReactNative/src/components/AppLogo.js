import React from "react";
import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AppLogo(props) {
  return (
    <Logo
      width={props.width}
      height={props.height}
      source={require("../assets/images/AppIcon.png")}
    />
  );
}

export default AppLogo;

const Logo = styled.Image`
  width: ${(props) => (props.width ? wp(props.width) : "300")}px;
  height: ${(props) => (props.height ? hp(props.height) : "348")}px;
  ${(props) =>
    props.width || props.height ? "resizeMode: contain;" : "margin: 75px auto;"}
`;

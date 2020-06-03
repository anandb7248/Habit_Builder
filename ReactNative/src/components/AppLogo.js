import React from "react";
import styled from "styled-components";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function AppLogo(props) {
  return (
    <Logo
      style={{ width: wp("75%"), height: hp("40%") }}
      source={require("../assets/images/AppIcon.png")}
    />
  );
}

export default AppLogo;

const Logo = styled.Image`
  margin: 75px auto;
`;

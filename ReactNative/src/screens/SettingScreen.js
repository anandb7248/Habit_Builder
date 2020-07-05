import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import ModButton from "../components/ModButton";
import Divider from "../components/Divider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function SettingScreen({ navigation }) {
  return (
    <View>
      <PageHeader text="Settings"></PageHeader>
      <Divider />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Notifications"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Send Feedback"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Share"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Rate on the App Store"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Sign In/Log Out"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Delete Account"
      />
    </View>
  );
}

const View = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  width: ${wp("100%")};
`;

export default SettingScreen;

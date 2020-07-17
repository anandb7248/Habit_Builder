import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import ModButton from "../components/ModButton";
import Divider from "../components/Divider";
import { logoutUser } from "../redux/actions/AuthActions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import LoggedInNav from "../navigator/LoggedInNav";

function SettingScreen({ navigation }) {
  const loginStatus = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => {
    if (loginStatus) {
      console.log("logging out");
      dispatch(logoutUser());
    } else {
      console.log("logging in");
      //Errors all over the place
      navigation.navigate("LoginScreen");
    }
  };

  useEffect(() => {
    if (loginStatus) {
      console.log("A user is logged in");
    } else {
      console.log("No users logged in");
    }
  }, loginStatus);

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
      {/* TODO: Call "LoggedInNav" */}
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Sign In/Log Out"
        onPress={logout}
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

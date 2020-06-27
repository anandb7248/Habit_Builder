import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import ModButton from "../components/ModButton";
import Divider from "../components/Divider";

function SettingScreen({ navigation }) {
  <View>
    <PageHeader text="Settings"></PageHeader>
    <Divider />
    <ModButton height="5%" width="100%" fontSize="4%" text="Notifications" />
    <ModButton height="5%" width="100%" fontSize="4%" text="Send Feedback" />
    <ModButton height="5%" width="100%" fontSize="4%" text="Share" />
    <ModButton
      height="5%"
      width="100%"
      fontSize="4%"
      text="Rate on the App Store"
    />
    <ModButton height="5%" width="100%" fontSize="4%" text="Sign In/Log Out" />
    <ModButton height="5%" width="100%" fontSize="4%" text="Delete Account" />
  </View>;
}

export default SettingScreen;

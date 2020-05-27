import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import Bell from "../components/Bell";
import BigButton from "../components/BigButton";

function NotificationScreen() {
  return (
    <View>
      <PageHeader text="Notification" />
      <Divider />
      <Subtitle>Allow notifications to help you achieve your goals!</Subtitle>
      <Bell />
      <BigButton text="Allow Notification" />
    </View>
  );
}

export default NotificationScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const Subtitle = styled.Text`
  color: white;
  font-size: 18px;
  width: 360px;
  margin: 20px auto;
  text-align: center;
`;

import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import BellIcon from "../assets/images/Bell.svg";
import ModButton from "../components/ModButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function NotificationScreen({ navigation }) {
  return (
    <View>
      <PageHeader text="Notification" hasHeader={false} />
      <Divider />
      <Subtitle>Allow notifications to help you achieve your goals!</Subtitle>
      <Padding>
        <BellIcon />
      </Padding>
      <ModButton
        text="Allow Notification"
        width={"85%"}
        height={"10%"}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      />
    </View>
  );
}

export default NotificationScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const Padding = styled.View`
  align-items: center;
  padding-vertical: 150px;
`;

const Subtitle = styled.Text`
  color: white;
  font-size: ${hp("2%")};
  width: ${wp("75%")};
  margin: 10px auto;
  text-align: center;
`;

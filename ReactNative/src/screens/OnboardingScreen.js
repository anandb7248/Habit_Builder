import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import AppLogo from "../components/AppLogo";
import BigButton from "../components/BigButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function OnboardingScreen() {
  return (
    <View>
      <PageHeader text="Habit Builder" />
      <Divider />
      <Subtitle style={{ width: wp("80%") }}>
        Achieve your goals with the consistent completion of daily habits!
      </Subtitle>
      <AppLogo />
      <BigButton text="Get Started" />
    </View>
  );
}

export default OnboardingScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const Subtitle = styled.Text`
  color: white;
  margin: 20px auto;
  text-align: center;
  font-size: ${hp("2%")};
  font-family: "PTSans-Regular";
`;

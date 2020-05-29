import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import AppLogo from "../components/AppLogo";
import BigButton from "../components/BigButton";

function OnboardingScreen() {
  return (
    <View>
      <PageHeader text="Habit Builder" />
      <Divider />
      <Subtitle>
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
  font-size: 18px;
  width: 360px;
  margin: 20px auto;
  text-align: center;
  font-family: "PTSans-Regular";
`;

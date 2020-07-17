import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import AppLogo from "../components/AppLogo";
import ModButton from "../components/ModButton";
import { useDispatch, useSelector } from "react-redux";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function OnboardingScreen({ navigation }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    () => navigation.navigate("setGoalScreen");
  } else {
    return (
      <View>
        <PageHeader text="Habit Builder" hasHeader={false} />
        <Divider />
        <Subtitle style={{ width: wp("80%") }}>
          Achieve your goals with the consistent completion of daily habits!
        </Subtitle>
        <AppLogo width="100%" height="45%" marginTop="7%" marginBottom="7%" />
        <ModButton
          text="Get Started"
          onPress={() => navigation.navigate("SetGoalScreen")}
          height="10%"
          width="85%"
        />
      </View>
    );
  }
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
  font-size: ${hp("2%")}px;
  font-family: "PTSans-Regular";
`;

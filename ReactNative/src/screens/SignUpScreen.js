import React from "react";
import { Image, StyleSheet, View } from "react-native";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import BigButton from "../components/BigButton";
import LongButton from "../components/LongButton";
import MediumButton from "../components/MediumButton";
import styled from "styled-components";
import TextLabel from "../components/TextLabel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LargeTextInput from "../components/LargeTextInput";
import COLORS from "../styles/Colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "10%",
    marginBottom: "10%",
    width: wp("75%"),
    height: hp("25%"),
  },
  header: {
    color: `${COLORS.appYelow}`,
  },
  horizontalRule: {
    color: "black",
    backgroundColor: "#FFFFFF",
    height: 1,
  },
});

const SignUpScreen = () => {
  return (
    <Wrapper>
      <HeaderText>Habit Builder</HeaderText>
      <View style={styles.horizontalRule} />
      <Image
        source={require("../assets/images/AppIcon.png")}
        style={styles.container}
      />
      <LargeTextInput placeholder="Email">
        <UserIcon />
      </LargeTextInput>
      <LargeTextInput placeholder="Password">
        <PasswordIcon />
      </LargeTextInput>
      <LargeTextInput placeholder="Password" />
      <BigButton text="Sign Up" />
      <LongButton text="Sign Up with Facebook" />
      <LongButton text="Sign Up with Gmail" />
      <LoginWrapper>
        <TextLabel label="Already have an account?" />
        <MediumButton text="Login" />
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${COLORS.appBlue};
  width: ${wp("100%")};
  position: relative;
`;

const LoginWrapper = styled.View`
  position: relative;
`;

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  margin: 0 auto;
  font-size: ${hp("5%")};
  font-family: "PTSans-Regular";
`;

export default SignUpScreen;

import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Button, Text } from "react-native";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import styled from "styled-components";
import TextLabel from "../components/TextLabel";
import Divider from "../components/Divider";
import { signUp, facebookLogin } from "../redux/actions/AuthActions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ModTextInput from "../components/ModTextInput";
import COLORS from "../styles/Colors";
import { db } from "../utils/firebase";
import PageHeader from "../components/PageHeader";
import ModButton from "../components/ModButton";
import { useDispatch, useSelector } from "react-redux";

const SignUpScreen = ({ props, navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);
  const signedUp = useSelector((state) => state.auth.signedUp);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const test = useSelector((state) => state);

  const handleSignUp = () => {
    if (userEmail && password && password === confirmPassword) {
      console.log(`signedUp value before signUp: ${signedUp}`);
      dispatch(signUp(userEmail, password));
    }
  };

  const handleFacebook = () => {
    //Facebook needs https connection for web app
    // dispatch(facebookLogin());
    // console.log(isAuthenticated);
  };

  useEffect(() => {
    if (signedUp) {
      console.log(
        `signedUp value from redux store has changed to: ${signedUp}`
      );
      // navigation.navigate("LoginScreen");
    }
  }, [signedUp]);

  return (
    <View>
      <PageHeader text={"Habit Builder"} hasHeader={false} />
      <Divider />
      {/* <AppLogo width={"100%"} height={"20%"} /> */}
      <ModTextInput
        inputText={userEmail}
        setInputText={setUserEmail}
        placeholder="Email"
        width="90%"
        height="8%"
      >
        <UserIcon />
      </ModTextInput>
      <ModTextInput
        inputText={password}
        setInputText={setPassword}
        placeholder="Password"
        width="90%"
        height="8%"
      >
        <PasswordIcon />
      </ModTextInput>
      <ModTextInput
        inputText={confirmPassword}
        setInputText={setConfirmPassword}
        placeholder="Confirm Password"
        width="90%"
        height="8%"
      />
      <ModButton
        text="Sign Up"
        width="90%"
        height="7%"
        spacing="3%"
        fontSize="4%"
        spacing="2%"
        onPress={handleSignUp}
      />
      <ModButton
        text="Sign Up with Facebook"
        height="5%"
        width="90%"
        fontSize="3%"
        onPress={handleFacebook}
      />
      <ModButton
        text="Sign Up with Gmail"
        height="5%"
        width="90%"
        fontSize="3%"
      />
      <View>
        <TextLabel label="Already have an account?" />
        <ModButton
          text="Login"
          fontSize="2%"
          height="5%"
          width="20%"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />
      </View>
    </View>
  );
};

const View = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  width: ${wp("100%")};
  align-items: center;
  justify-content: center;
`;

export default SignUpScreen;

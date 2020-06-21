import React, { useState, useEffect } from "react";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import ModButton from "../components/ModButton";
import styled from "styled-components";
import Divider from "../components/Divider";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/AuthActions";
import PageHeader from "../components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import ModTextInput from "../components/ModTextInput";
import COLORS from "../styles/Colors";
import { Platform, Animated } from "react-native";
import LottieView from "lottie-react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth);
  const loginError = useSelector((state) => state.auth.loginError);
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [requestMade, setRequestMade] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loggingIn, setLogginIn] = useState(false);

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    if (email !== null && password !== null) {
      setRequestMade(true);
      dispatch(loginUser(email, password));
    }
  };

  useEffect(() => {
    if (requestMade && isAuthenticated) {
      console.log("made changes");
      setAuthenticated(true);
      setRequestMade(false);
      setTimeout(() => setAuthenticated(false), 1000);
    }
  });

  return (
    <LoginView>
      <LottieView
        source={require("../assets/animations/loading.json")}
        autoPlay
        loop
        style={{ opacity: isLoggingIn ? 1 : 0 }}
      />
      <LottieView
        source={require("../assets/animations/checkmark.json")}
        autoPlay
        style={{ opacity: authenticated ? 1 : 0 }}
      />
      <PageHeader
        text="Habit Builder"
        hasHeader={Platform.OS === "android" ? false : true}
      />
      <Divider />
      <LogoContainer>
        <AppLogo width="100%" height="33%" />
      </LogoContainer>
      <ModTextInput
        setInputText={handleEmailInput}
        placeholder="Email"
        width="90%"
        height="8%"
      >
        <UserIcon />
      </ModTextInput>
      <ModTextInput
        setInputText={handlePasswordInput}
        placeholder="Password"
        width="90%"
        height="8%"
      >
        <PasswordIcon />
      </ModTextInput>
      <ModButton
        text="Sign In"
        spacing="3"
        width="90%"
        height="7%"
        fontSize="4%"
        onPress={handleSignIn}
      />
      <ModButton
        height="5%"
        width="90%"
        fontSize="3%"
        text="Sign In with Facebook"
      />
      <ModButton
        height="5%"
        width="90%"
        fontSize="3%"
        text="Sign In with Google"
      />
    </LoginView>
  );
};

const LoginView = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default LoginScreen;

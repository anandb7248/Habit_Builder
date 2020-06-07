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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LargeTextInput from "../components/LargeTextInput";
import COLORS from "../styles/Colors";

//hooks give state control to stateless functions, which replaced classes in react
//Normally classes use the componentDidMount and componentDidUpdate
//useEffect is a hook that replaces the old school componentDidMount and componentDidUpdate
//useDispatch is a hook that replaces the mapStateToProps in redux
//useSelector allows direct access to a state on the store
//useSelector and useDispatch is the new alternative to replace the connect

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.loginError);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    if (email !== null && password !== null) {
      dispatch(loginUser(email, password));
    }
  };

  return (
    <LoginView>
      <HeaderText>Habit Builder</HeaderText>
      <Divider />
      <LogoContainer>
        <AppLogo width={"100%"} height={"35%"} />
      </LogoContainer>
      <LargeTextInput
        setInputText={handleEmailInput}
        placeholder={"Email"}
        width={"85%"}
        height={'8%'}
      >
        <UserIcon />
      </LargeTextInput>
      <LargeTextInput
        setInputText={handlePasswordInput}
        placeholder="Password"
        width={"85%"}
        height={'8%'}
      >
        <PasswordIcon />
      </LargeTextInput>
      <ModButton
        text="Sign In"
        spacing={"3"}
        width={"85%"}
        height={'10%'}
        onPress={handleSignIn}
      />
      <ModButton
        height={"5%"}
        width={"85%"}
        fontSize={"3%"}
        text="Sign In with Facebook"
      />
      <ModButton
        height={"5%"}
        width={"85%"}
        fontSize={"3%"}
        text="Sign In with Google"
      />
    </LoginView>
  );
};

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  margin: 0 auto;
  padding-top: 20px;
  font-size: ${hp("7%")}px;
  font-family: "PTSans-Regular";
`;

const LoginView = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default LoginScreen;

// function mapStateToProps(state) {
//   return {
//     isLoggingIn: state.auth.isLoggingIn,
//     loginError: state.auth.loginError,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// }

// export default connect(mapStateToProps)(LoginScreen);

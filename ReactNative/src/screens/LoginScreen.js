import React, { useState, useEffect } from "react";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import ModButton from "../components/ModButton";
import styled from "styled-components";
import Divider from "../components/Divider";
import { loginUser, googleLoginUser } from "../redux/actions/AuthActions";
import PageHeader from "../components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import ModTextInput from "../components/ModTextInput";
import COLORS from "../styles/Colors";
import { Platform } from "react-native";
import LottieView from "lottie-react-native";

//hooks give state control to stateless functions, which replaced classes in react
//Normally classes use the componentDidMount and componentDidUpdate
//useEffect is a hook that replaces the old school componentDidMount and componentDidUpdate
//useDispatch is a hook that replaces the mapStateToProps in redux
//useSelector allows direct access to a state on the store
//useSelector and useDispatch is the new alternative to replace the connect

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth_user = useSelector((state) => state.auth.user);
  const loginError = useSelector((state) => state.auth.loginError);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);
  const [requestMade, setRequestMade] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  /* 
    will skip login to main screen if already authenticated 
    need main sign out button 
  */
  if (isAuthenticated === true) {
    console.log("isAuthenticated " + isAuthenticated);
    navigation.navigate("MainScreen");
  }

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

  const handleGoogleSignIn = async () => {
    console.log("Google Sign In w/ expo started");
    dispatch(googleLoginUser());
  };

  useEffect(() => {
    if (requestMade && isAuthenticated && !isLoggingIn) {
      setRequestMade(false);
      setAuthenticated(true);
      setTimeout(() => setAuthenticated(false), 1000);
    } else if (requestMade && loginError) {
      setRequestMade(false);
      setFailedLogin(true);
      setTimeout(() => setFailedLogin(false), 1000);
    }
  });

  return (
    <LoginView>
      <LottieView
        source={require("../assets/animations/failed.json")}
        autoPlay
        style={{ opacity: failedLogin ? 1 : 0, zIndex: failedLogin ? 2 : 0 }}
      />
      <LottieView
        source={require("../assets/animations/checkmark.json")}
        autoPlay
        style={{
          opacity: authenticated ? 1 : 0,
          zIndex: authenticated ? 3 : 0,
        }}
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
        secure={true}
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
        onPress={handleGoogleSignIn}
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

// function mapStateToProps(state) {
//   return {
//     isLoggingIn: state.auth.isLoggingIn,
//     loginError: state.auth.loginError,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// }

// export default connect(mapStateToProps)(LoginScreen);

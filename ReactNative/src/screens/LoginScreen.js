import React, { Component } from "react";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import ModButton from "../components/ModButton";
import styled from "styled-components";
import Divider from "../components/Divider";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/Auth"
import PageHeader from "../components/PageHeader";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LargeTextInput from "../components/LargeTextInput";
import COLORS from "../styles/Colors";

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
class LoginScreen extends Component {
  state = { email: "", pasword: ""}

  handleEmailInput = (text) => {
    this.setState({email: text})
  };

  handlePasswordInput = (text) => {
    this.setState({password: text})
  };

  handleSignIn = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  }

  render() {
    return (
      <LoginView>
        <HeaderText>Habit Builder</HeaderText>
        <Divider />
        <LogoContainer>
          <AppLogo width={"100%"} height={"35%"} />
        </LogoContainer>
        <LargeTextInput
          inputText={userEmail}
          setInputText={this.handleEmailInput}
          placeholder={"Email"}
          width={"85%"}
        >
          <UserIcon />
        </LargeTextInput>
        <LargeTextInput
          inputText={password}
          setInputText={this.handlePasswordInput}
          placeholder="Password"
          width={"85%"}
        >
          <PasswordIcon />
        </LargeTextInput>
        <ModButton text="Sign In" spacing={"30px"} width={"85%"} 
        onPress={this.handleSignIn}/>
        <ModButton
          height={"5%"}
          width={"85%"}
          fontSize={"3%"}
          spacing={"5px"}
          text="Sign In with Facebook"
        />
        <ModButton
          height={"5%"}
          width={"85%"}
          fontSize={"3%"}
          spacing={"5px"}
          text="Sign In with Google"
        />
      </LoginView>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.AuthReducer.isLoggingIn,
    loginError: state.AuthReducer.loginError,
    isAuthenticated: state.AuthReducer.isAuthenticated
  };
}

export default connect(mapStateToProps)(LoginScreen);

import React, { useState } from "react";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import ModButton from "../components/ModButton";
import styled from "styled-components";
import Divider from "../components/Divider";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LargeTextInput from "../components/LargeTextInput";
import COLORS from "../styles/Colors";

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  margin: 0 auto;
  font-size: ${hp("5%")};
  font-family: "PTSans-Regular";
`

const LoginView = styled.View`
    background-color: ${COLORS.appBlue};
    margin-top: ${hp('6.5%')};
    height: ${hp('100%')};
    align-items: center;
    justify-content: center;
`
const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
    padding: 10px;
`
function LoginScreen(props) {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <LoginView>
            <HeaderText>Habit Builder</HeaderText>
            <Divider/>
            <LogoContainer>
             <AppLogo
                width={"100%"}
                height={"35%"}/>
            </LogoContainer >
            <LargeTextInput 
                inputText={userEmail}
                setInputText={setUserEmail}
                placeholder={"Email"}
                width={"85%"}> 
                <UserIcon/>
            </LargeTextInput>
            <LargeTextInput 
                inputText={password}
                setInputText={setPassword}
                placeholder="Password"
                width={"85%"}>
                    <PasswordIcon/>
            </LargeTextInput>
            <ModButton
                text="Sign In"
                spacing={'30px'}
                width={"85%"}/>
            <ModButton
                height={'5%'}
                width={"85%"}
                fontSize={'3%'}
                spacing={'5px'}
                text="Sign In with Facebook"/>
            <ModButton
                height={'5%'}
                width={"85%"}
                fontSize={'3%'}
                spacing={'5px'}
                text="Sign In with Google"/>
            
        </LoginView>
    )
}

export default LoginScreen;

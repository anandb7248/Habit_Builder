import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import BigButton from "../components/BigButton";
import LongButton from "../components/LongButton";
import MediumButton from "../components/MediumButton";
import styled from "styled-components";
import Divider from "../components/Divider";

import TextLabel from "../components/TextLabel";
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
`;

const LoginView = styled.View`
    background-color: ${COLORS.appBlue};
    margin-top: ${hp('6%')};
    height: ${hp('100%')};
    align-items: center;
    justify-content: center;
`

const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`

const ButtonContainer = styled.View`
    
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
                height={"30%"}/>
            </LogoContainer >
            
            <LargeTextInput 
                inputText={userEmail}
                setInputText={setUserEmail}
                placeholder={"Email"}> 
                <UserIcon/>
            </LargeTextInput>
            <LargeTextInput 
                inputText={password}
                setInputText={setPassword}
                placeholder="Password">
                    <PasswordIcon/>
            </LargeTextInput>
            <BigButton
                text="Sign In"/>
           
            <LongButton
                text="Sign In with Facebook"/>
            <LongButton
                text="Sign In with Google"/>
            
        </LoginView>
    )
}

export default LoginScreen;

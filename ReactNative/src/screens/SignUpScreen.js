import React, { useState } from "react";
import { Image, StyleSheet, Button, Text } from "react-native";
import AppLogo from "../components/AppLogo";
import UserIcon from "../assets/images/User.svg";
import PasswordIcon from "../assets/images/Password.svg";
import styled from "styled-components";
import TextLabel from "../components/TextLabel";
import Divider from "../components/Divider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ModTextInput from "../components/ModTextInput";
import COLORS from "../styles/Colors";
import { db } from "../utils/firebase";
import PageHeader from "../components/PageHeader";
import ModButton from "../components/ModButton";

const SignUpScreen = ({ props, navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);

  const postData = () => {
    db.collection("users")
      .doc("squidward")
      .set({
        name: "The Quickster",
      })
      .then(() => {
        console.log("Data was sent");
      })
      .catch((err) => {
        console.log(`Failed: ${err}`);
      });
  };

  const getData = () => {
    db.collection("users")
      .doc("squidward")
      .get()
      .then((doc) => {
        console.log("data was retrieved");
        console.log(doc.data());
        console.log(props.personData);
      })
      .catch((err) => {
        console.log(`Failed: ${err}`);
      });
  };

  return (
    <View>
      <PageHeader text={"Habit Builder"} hasHeader={false} />
      <Divider />
      <AppLogo width={"100%"} height={"20%"} />
      <ModTextInput
        inputText={userEmail}
        setInputText={setUserEmail}
        placeholder="Email"
      >
        <UserIcon />
      </ModTextInput>
      <ModTextInput
        inputText={password}
        setInputText={setPassword}
        placeholder="Password"
      >
        <PasswordIcon />
      </ModTextInput>
      <ModTextInput
        inputText={confirmPassword}
        setInputText={setConfirmPassword}
        placeholder="Confirm Password"
      />
      <ModButton text="Sign Up" width={"85%"} height={"10%"} spacing={"3%"} />
      <ModButton
        text="Sign Up with Facebook"
        height="5%"
        width="85%"
        fontSize="3%"
      />
      <ModButton
        text="Sign Up with Gmail"
        height="5%"
        width="85%"
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

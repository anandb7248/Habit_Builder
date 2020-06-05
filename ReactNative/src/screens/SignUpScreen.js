import React, { useState } from "react";
import { Image, StyleSheet, Button, Text } from "react-native";
import AppLogo from "../components/AppLogo";
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
import { db } from "../utils/firebase";
import { connect } from "react-redux";
import { watchPersonData } from "./../redux/app-redux";

const mapStateToProps = (state) => {
  return {
    personData: state.personData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    watchPersonData: () => dispatch(watchPersonData()),
  };
};

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

const SignUpScreen = (props) => {
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
      <Button title="Post Data" onPress={postData} />
      <Button title="Get Data" onPress={getData} />
      {/* <HeaderText>Habit Builder</HeaderText> */}
      <HeaderText>
        {props.personData ? props.personData.name : "nothing"}
      </HeaderText>
      <View style={styles.horizontalRule} />
      <AppLogo />
      <LargeTextInput
        inputText={userEmail}
        setInputText={setUserEmail}
        placeholder="Email"
      >
        <UserIcon />
      </LargeTextInput>
      <LargeTextInput
        inputText={password}
        setInputText={setPassword}
        placeholder="Password"
      >
        <PasswordIcon />
      </LargeTextInput>
      <LargeTextInput
        inputText={confirmPassword}
        setInputText={setConfirmPassword}
        placeholder="Confirm Password"
      />
      <BigButton text="Sign Up" />
      <LongButton text="Sign Up with Facebook" />
      <LongButton text="Sign Up with Gmail" />
      <LoginContainer>
        <TextLabel label="Already have an account?" />
        <MediumButton text="Login" />
      </LoginContainer>
    </View>
  );
};

const View = styled.View`
  background-color: ${COLORS.appBlue};
  width: ${wp("100%")};
  position: relative;
`;

const LoginContainer = styled.View`
  position: relative;
`;

const HeaderText = styled.Text`
  color: ${COLORS.appYelow};
  margin: 0 auto;
  font-size: ${hp("5%")};
  font-family: "PTSans-Regular";
`;

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

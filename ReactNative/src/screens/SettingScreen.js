import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import ModButton from "../components/ModButton";
import ModTextInput from "../components/ModTextInput";
import { db } from "../utils/firebase";
import Divider from "../components/Divider";
import { logoutUser } from "../redux/actions/AuthActions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import LoggedInNav from "../navigator/LoggedInNav";

function SettingScreen({ navigation }) {
  const loginStatus = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [feedbackRequest, setFeedbackRequest] = useState(false);
  const [userFeedback, setUserFeedback] = useState("");
  const dispatch = useDispatch();
  const logout = () => {
    if (loginStatus) {
      console.log("logging out");
      dispatch(logoutUser());
    } else {
      console.log("logging in");
      //Errors all over the place
      navigation.navigate("LoginScsreen");
    }
  };

  const handleNotification = () => {
    console.log("going to notification");
    // navigation.navigate("NotificationScreen");
  };

  const handleInput = (text) => {
    setUserFeedback(text);
  };

  const enableFeedback = () => {
    setFeedbackRequest(true);
  };

  const handleFeedback = () => {
    setFeedbackRequest(false);
    const feedbackList = db
      .collection("feedback")
      .doc(`${user.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const feedback = doc.data();
          const feedbackCount = Object.keys(feedback).length + 1;
          const feedbackKey = `feedback${feedbackCount}`;
          const newFeedback = {
            ...feedback,
            [feedbackKey]: `This is the ${feedbackCount} feedback`,
          };
          db.collection("feedback").doc(`${user.uid}`).set(newFeedback);
          console.log(feedback);
        }
      });
  };

  useEffect(() => {
    if (loginStatus) {
      console.log("A user is logged in");
    } else {
      console.log("No users logged in");
    }
  }, loginStatus);

  return (
    <View>
      <ModButton
        height="5%"
        width="90%"
        fontSize="3%"
        text="Submit Feedback"
        onPress={handleFeedback}
      />
      <ModTextInput
        setInputText={handleInput}
        width="100%"
        height="100%"
        placeholder="Enter Feedback Here"
        display={!feedbackRequest}
      />
      <PageHeader text="Settings"></PageHeader>
      <Divider />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Notifications"
        onPress={handleNotification}
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Send Feedback"
        onPress={enableFeedback}
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Share"
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Rate on the App Store"
      />
      {/* TODO: Call "LoggedInNav" */}
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Sign In/Log Out"
        onPress={logout}
      />
      <ModButton
        cornerRadius="0"
        height="10%"
        width="100%"
        fontSize="4%"
        text="Delete Account"
      />
    </View>
  );
}

const View = styled.View`
  background-color: ${COLORS.appBlue};
  flex: 1;
  width: ${wp("100%")};
`;

export default SettingScreen;

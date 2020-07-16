import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import ModButton from "../components/ModButton";
import moment from "moment";
import ModTextInput from "../components/ModTextInput";
import TextLabel from "../components/TextLabel";
import DatePicker from "../components/DatePicker";
import { TouchableOpacity, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function SetGoalScreen({ route, navigation }, props) {
  const [goal, setGoal] = useState("");
  const [habits, setHabits] = useState(["", "", "", "", ""]);
  const defaultDaysToComplete = 21;
  const startDate = new Date();
  const [endDate, setEndDate] = useState(new Date());
  const [showIOSDate, toggleDatePicker] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const isModal = route.params;

  useEffect(() => {
    // Right initially, set the end date to 21 days from today
    var today = new Date();
    var twentyOneDaysInFuture = today.setDate(
      today.getDate() + defaultDaysToComplete
    );
    setEndDate(new Date(twentyOneDaysInFuture));
    setNumberOfDays(defaultDaysToComplete);
  }, []);

  const configureDates = (changedDate) => {
    setShow(Platform.OS === "ios");
    // setShow(true);

    if (changedDate < startDate) {
      setEndDate(startDate);
      setNumberOfDays(0);
    } else {
      setEndDate(changedDate);

      const diffTime = changedDate - startDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfDays(diffDays);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  const date = () => {
    showDatePicker();
    toggleDatePicker((prev) => !prev);
  };

  return (
    <View>
      <PageHeader text="Set a Goal" hasHeader={false}></PageHeader>
      <Divider />
      <StartingDate>
        From Today: {moment(startDate).format("MMM D, YYYY")}
      </StartingDate>
      <ModTextInput
        inputText={goal}
        setInputText={setGoal}
        placeholder="What would you like to achieve?"
        width="85%"
        height="6%"
      ></ModTextInput>
      <TextLabel label="When do you want to achieve your goal?" />
      <Container>
        <TouchableOpacity style={{ flex: 1 }} onPress={date}>
          <Label>{moment(endDate).format("MMM D, YYYY")}</Label>
        </TouchableOpacity>
      </Container>
      <DaysToCompletion>
        {numberOfDays === 0 ? "---" : numberOfDays} days to completion
      </DaysToCompletion>
      <Divider />
      <TextLabel label="Daily Habits to Achieve your Goal" />
      {habits.map((habit, index) => (
        <Container key={index}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SetHabitScreen")}
          >
            <Label>{habit !== "" ? habit : "-"}</Label>
          </TouchableOpacity>
        </Container>
      ))}
      <ModButton
        text="Set Goal"
        onPress={() =>
          isModal
            ? navigation.goBack()
            : navigation.navigate("NotificationScreen")
        }
        width="85%"
        height="10%"
        spacing="3%"
      />
      {show && (
        <DatePicker
          show={showDatePicker}
          showIOS={showIOSDate}
          toggle={toggleDatePicker}
          onChange={configureDates}
          date={endDate}
        />
      )}
    </View>
  );
}

export default SetGoalScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const StartingDate = styled.Text`
  font-size: ${wp("5%")}px;
  color: white;
  margin: 0 auto;
  padding: ${hp("1%")}px;
  font-family: "PTSans-Regular";
`;

const DaysToCompletion = styled.Text`
  color: ${COLORS.appYelow};
  font-size: ${wp("4%")}px;
  font-weight: bold;
  margin: 5px auto;
  font-family: "PTSans-Regular";
`;

const Container = styled.View`
  background: white;
  border-radius: 25px;
  width: ${wp("85%")}px;
  height: ${hp("4.1%")}px;
  margin: ${hp("1.3%")}px auto;
`;

const Label = styled.Text`
  color: ${COLORS.appBlue};
  font-size: ${wp("4%")}px;
  font-weight: bold;
  margin: auto auto;
  font-family: "PTSans-Regular";
`;

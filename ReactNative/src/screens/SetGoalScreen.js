import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import BigButton from "../components/BigButton";
import moment from "moment";
import BigTextInput from "../components/BigTextInput";
import TextLabel from "../components/TextLabel";
import DatePicker from "../components/DatePicker";
import { TouchableOpacity } from "react-native";

function SetGoalScreen(props) {
  const [goal, setGoal] = useState("");
  const [habits, setHabits] = useState(["", "", "", "", ""]);
  const defaultDaysToComplete = 21;
  const startDate = new Date();
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, toggleDatePicker] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(0);

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

  return (
    <View>
      <PageHeader text="Set a Goal"></PageHeader>
      <Divider />
      <StartingDate>
        From Today: {moment(startDate).format("MMM D, YYYY")}
      </StartingDate>
      <BigTextInput
        inputText={goal}
        setInputText={setGoal}
        placeholder="What would you like to achieve?"
      ></BigTextInput>
      <TextLabel label="When do you want to achieve your goal?" />
      <Container>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            toggleDatePicker((prev) => !prev);
          }}
        >
          <Label>{moment(endDate).format("MMM D, YYYY")}</Label>
        </TouchableOpacity>
      </Container>
      <DaysToCompletion>
        {numberOfDays === 0 ? "---" : numberOfDays} days to completion
      </DaysToCompletion>
      <Divider />
      <TextLabel label="Daily Habits to Achieve your Goal" />
      {habits.map((habit, index) => (
        <Container>
          <TouchableOpacity style={{ flex: 1 }}>
            <Label>{habit !== "" ? habit : "-"}</Label>
          </TouchableOpacity>
        </Container>
      ))}
      <BigButton text="Set Goal" />
      <DatePicker
        show={showDatePicker}
        toggle={toggleDatePicker}
        date={endDate}
        onChange={configureDates}
      />
    </View>
  );
}

export default SetGoalScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const StartingDate = styled.Text`
  font-size: 18px;
  color: white;
  margin: 0 auto;
  padding: 20px;
  font-family: "PTSans-Regular";
`;

const DaysToCompletion = styled.Text`
  color: ${COLORS.appYelow};
  font-size: 18px;
  font-weight: bold;
  margin: 5px auto;
  font-family: "PTSans-Regular";
`;

const Container = styled.View`
  background: white;
  border-radius: 25px;
  width: 350px;
  height: 40px;
  margin: 10px auto;
`;

const Label = styled.Text`
  color: ${COLORS.appBlue};
  font-size: 16px;
  font-weight: bold;
  margin: auto auto;
  font-family: "PTSans-Regular";
`;

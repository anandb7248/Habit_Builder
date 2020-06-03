import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import BigButton from "../components/BigButton";
import BigTextInput from "../components/BigTextInput";
import TextLabel from "../components/TextLabel";
import MediumButton from "../components/MediumButton";
import SmallButton from "../components/SmallButton";
import LongButton from "../components/LongButton";
import Bell from "../components/Bell";
import ReminderButton from "../components/ReminderButton";
import TimePicker from "../components/TimePicker";

function SetHabitScreen(props) {
  const [status, setStatus] = useState("Daily");
  const [sunday, sundayStatus] = useState(false);
  const [monday, mondayStatus] = useState(false);
  const [tuesday, tuesdayStatus] = useState(false);
  const [wednesday, wednesdayStatus] = useState(false);
  const [thursday, thursdayStatus] = useState(false);
  const [friday, fridayStatus] = useState(false);
  const [saturday, saturdayStatus] = useState(false);
  const [everyday, everydayStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date(1598051730000));
  const [showTimePicker, toggleTimePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(!show);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const toggleDay = (day) => {
    return day ? COLORS.appYelow : COLORS.appGray;
  };

  const toggleWeek = (day) => {
    // attempted/failed logic for week toggle went here
    return day ? COLORS.appYelow : COLORS.appGray;
  };

  return (
    <View>
      <PageHeader text="Set a Habit"></PageHeader>
      <Divider />
      <Padding>
        <BigTextInput></BigTextInput>
      </Padding>
      <TextLabel label="I want to repeat this..." />
      <ViewHorizontal>
        <MediumButton
          text="Daily"
          color={status === "Daily" ? COLORS.appYelow : COLORS.appGray}
          onPress={() => setStatus("Daily")}
        />
        <MediumButton
          text="Weekly"
          color={status === "Weekly" ? COLORS.appYelow : COLORS.appGray}
          onPress={() => setStatus("Weekly")}
        />
      </ViewHorizontal>
      <ViewHorizontal>
        <SmallButton
          text="Su"
          color={toggleDay(sunday)}
          onPress={() => sundayStatus(!sunday)}
        />
        <SmallButton
          text="M"
          color={toggleDay(monday)}
          onPress={() => mondayStatus(!monday)}
        />
        <SmallButton
          text="T"
          color={toggleDay(tuesday)}
          onPress={() => tuesdayStatus(!tuesday)}
        />
        <SmallButton
          text="W"
          color={toggleDay(wednesday)}
          onPress={() => wednesdayStatus(!wednesday)}
        />
        <SmallButton
          text="Th"
          color={toggleDay(thursday)}
          onPress={() => thursdayStatus(!thursday)}
        />
        <SmallButton
          text="F"
          color={toggleDay(friday)}
          onPress={() => fridayStatus(!friday)}
        />
        <SmallButton
          text="Sa"
          color={toggleDay(saturday)}
          onPress={() => saturdayStatus(!saturday)}
        />
      </ViewHorizontal>
      <Container>
        <LongButton
          text="Everyday"
          color={toggleWeek(everyday)}
          onPress={() => everydayStatus(!everyday)}
        />
      </Container>
      <Padding />
      <Padding />
      <TextLabel label="Give me a reminder at" />
      <ViewHorizontal>
        <Bell size={50} />
        <ReminderButton
          text="10 am"
          onPress={() => {
            toggleTimePicker((prev) => !prev);
          }}
        />
      </ViewHorizontal>
      <Container>
        <BigButton text="Set Goal" />
      </Container>
      <TimePicker
        show={showTimePicker}
        toggle={toggleTimePicker}
        onChange={onChange}
      />
    </View>
  );
}

export default SetHabitScreen;

const Padding = styled.View`
  padding-vertical: 20px;
`;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const ViewHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-vertical: 20px;
`;

const Container = styled.View`
  align-items: center;
`;

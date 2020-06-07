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
import BellIcon from "../assets/images/Bell.svg";
import ReminderButton from "../components/ReminderButton";
import TimePicker from "../components/TimePicker";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function SetHabitScreen(props) {
  const [status, setStatus] = useState("Daily");
  const daysText = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  const [days, setDays] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [everyday, everydayStatus] = useState(true);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date(1598051730000));
  const [showTimePicker, toggleTimePicker] = useState(false);

  const handleDayClick = (index) => {
    let newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);

    const countOn = newDays.filter((d) => {
      return d === true;
    }).length;

    if (countOn === 7) {
      setDays([false, false, false, false, false, false, false]);
      everydayStatus(true);
    } else {
      everydayStatus(false);
    }
  };

  const handleEverydayClick = () => {
    everydayStatus(!everyday);

    if (!everyday) {
      setDays([false, false, false, false, false, false, false]);
    }
  };

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

  return (
    <View>
      <PageHeader text="Set a Habit"></PageHeader>
      <Divider />
      <Padding>
        <BigTextInput placeholder="What is the name of your habit?"></BigTextInput>
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
      <Padding />
      <ViewHorizontal>
        {daysText.map((day, index) => {
          return (
            <SmallButton
              key={index}
              text={day}
              color={days[index] === true ? COLORS.appYelow : COLORS.appGray}
              onPress={() => {
                handleDayClick(index);
              }}
            />
          );
        })}
      </ViewHorizontal>
      <Padding />
      <Container>
        <LongButton
          text="Everyday"
          color={everyday === true ? COLORS.appYelow : COLORS.appGray}
          onPress={() => {
            handleEverydayClick();
          }}
        />
      </Container>
      <Padding />
      {/* <Padding /> */}
      {/* <Padding />
      <Padding /> */}
      <TextView>
        <TextLabel label="Give me a reminder at" />
      </TextView>
      <ViewHorizontal>
        <BellIcon width="20%" height="100%" />
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

const TextView = styled.View`
  padding-top: ${hp("5%")}px;
`;

const Padding = styled.View`
  padding-vertical: ${hp("2%")}px;
`;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const ViewHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-vertical: ${hp("1%")}px;
`;

const Container = styled.View`
  align-items: center;
`;

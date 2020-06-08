import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import ModButton from "../components/ModButton";
import ModTextInput from "../components/ModTextInput";
import TextLabel from "../components/TextLabel";
import BellIcon from "../assets/images/Bell.svg";
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
        <ModTextInput
          placeholder="What is the name of your habit?"
          width="85%"
          height="8%"
        />
      </Padding>
      <TextLabel label="I want to repeat this..." />
      <ViewHorizontal>
        <ModButton
          text="Daily"
          color={status === "Daily" ? COLORS.appYelow : COLORS.appGray}
          onPress={() => setStatus("Daily")}
          width="35%"
          height="5%"
          fontColor="white"
          fontSize="2%"
          cornerRadius="5px"
        />
        <ModButton
          text="Weekly"
          color={status === "Weekly" ? COLORS.appYelow : COLORS.appGray}
          onPress={() => setStatus("Weekly")}
          width="35%"
          height="5%"
          fontColor="white"
          fontSize="2%"
          cornerRadius="5px"
        />
      </ViewHorizontal>
      <Padding />
      <ViewHorizontal>
        {daysText.map((day, index) => {
          return (
            <ModButton
              key={index}
              text={day}
              color={days[index] === true ? COLORS.appYelow : COLORS.appGray}
              onPress={() => {
                handleDayClick(index);
              }}
              width="10%"
              height="5%"
              fontSize="2%"
              cornerRadius="5px"
              spacing="1%"
              fontColor="white"
            />
          );
        })}
      </ViewHorizontal>
      <Padding />
      <Container>
        <ModButton
          text="Everyday"
          color={everyday === true ? COLORS.appYelow : COLORS.appGray}
          onPress={() => {
            handleEverydayClick();
          }}
          cornerRadius="5px"
          height="5%"
          width="85%"
          fontSize="3%"
          fontColor="white"
        />
      </Container>
      <Padding />
      <TextView>
        <TextLabel label="Give me a reminder at" />
      </TextView>
      <ViewHorizontal>
        <BellIcon width="20%" height="100%" />
        <ModButton
          text="10 am"
          width="50%"
          height="5%"
          fontSize="3%"
          onPress={() => {
            toggleTimePicker((prev) => !prev);
          }}
        />
      </ViewHorizontal>
      <Container>
        <ModButton text="Set Habit" width="85%" height="10%" />
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

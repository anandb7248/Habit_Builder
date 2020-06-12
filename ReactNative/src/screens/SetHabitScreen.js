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
import { Platform } from "react-native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

function SetHabitScreen({ navigation }) {
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

  const [everyday, everydayStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());
  const [showIOSTime, toggleTimePicker] = useState(false);

  const handleDayClick = (index) => {
    let newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);

    const countOn = newDays.filter((d) => {
      return d === true;
    }).length;

    if (countOn === 7) {
      everydayStatus(true);
    } else {
      everydayStatus(false);
    }
  };

  const handleEverydayClick = () => {
    everydayStatus(!everyday);

    if (!everyday) {
      setDays([true, true, true, true, true, true, true]);
    }
  };

  const handleClearClick = () => {
    everydayStatus(false);
    setDays([false, false, false, false, false, false, false]);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const time = () => {
    showTimepicker();
    toggleTimePicker((prev) => !prev);
  };

  return (
    <View>
      <PageHeader
        text="Set a Habit"
        hasHeader={Platform.OS === "android" ? false : true}
      ></PageHeader>
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
      <ViewHorizontal>
        <ModButton
          text="Everyday"
          color={everyday === true ? COLORS.appYelow : COLORS.appGray}
          onPress={() => handleEverydayClick()}
          width={"35%"}
          height={"5%"}
          fontColor={"white"}
          fontSize={"2%"}
          cornerRadius={"5px"}
        />
        <ModButton
          text="Clear"
          color={COLORS.appGray}
          onPress={() => handleClearClick()}
          width={"35%"}
          height={"5%"}
          fontColor={"white"}
          fontSize={"2%"}
          cornerRadius={"5px"}
        />
      </ViewHorizontal>
      <Padding />
      <Padding />
      <TextView>
        <TextLabel label="Give me a reminder at" />
      </TextView>
      <ViewHorizontal>
        <BellIcon width="20%" height="100%" />
        <ModButton
          text={moment(date).format("hh:mm a")}
          width={"50%"}
          height={"5%"}
          fontSize={"3%"}
          onPress={time}
        />
      </ViewHorizontal>
      <Padding />
      <Container>
        <ModButton
          text="Set Habit"
          width="85%"
          height="10%"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Container>
      {show && (
        <TimePicker
          show={showTimepicker}
          showIOS={showIOSTime}
          toggle={toggleTimePicker}
          onChange={onChange}
          date={date}
        />
      )}
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

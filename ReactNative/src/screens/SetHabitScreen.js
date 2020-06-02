import React, { useState } from "react";
import { Button } from "react-native";
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
import DatePicker from "../components/DatePicker";

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
          color={sunday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => sundayStatus(!sunday)}
        />
        <SmallButton
          text="M"
          color={monday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => mondayStatus(!monday)}
        />
        <SmallButton
          text="T"
          color={tuesday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => tuesdayStatus(!tuesday)}
        />
        <SmallButton
          text="W"
          color={wednesday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => wednesdayStatus(!wednesday)}
        />
        <SmallButton
          text="Th"
          color={thursday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => thursdayStatus(!thursday)}
        />
        <SmallButton
          text="F"
          color={friday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => fridayStatus(!friday)}
        />
        <SmallButton
          text="Sa"
          color={saturday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => saturdayStatus(!saturday)}
        />
      </ViewHorizontal>
      <Container>
        <LongButton
          text="Everyday"
          color={everyday ? COLORS.appYelow : COLORS.appGray}
          onPress={() => everydayStatus(!everyday)}
        />
      </Container>
      <Padding />
      <Padding />

      <TextLabel label="Give me a reminder at" />
      <ViewHorizontal>
        <Bell size={50} />
        <ReminderButton text="10 am" />
      </ViewHorizontal>
      <Container>
        <BigButton text="Set Goal" />
      </Container>
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

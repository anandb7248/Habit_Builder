import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import BigButton from "../components/BigButton";
import BigTextInput from "../components/BigTextInput";
import TextLabel from "../components/TextLabel";
import { TouchableOpacity } from "react-native";
import MediumButton from "../components/MediumButton";
import SmallButton from "../components/SmallButton";
import LongButton from "../components/LongButton";
import Bell from "../components/Bell";
import ReminderButton from "../components/ReminderButton";

function SetHabitScreen(props) {
  return (
    <View>
      <PageHeader text="Set a Habit"></PageHeader>

      <Divider />
      <Padding>
        <BigTextInput></BigTextInput>
      </Padding>
      <TextLabel label="I want to repeat this..." />
      <ViewHorizontal>
        <MediumButton text="Daily" color={COLORS.appYelow} />
        <MediumButton text="Weekly" color={COLORS.appGray} />
      </ViewHorizontal>
      <ViewHorizontal>
        <SmallButton text="Su" color={COLORS.appGray} />
        <SmallButton text="M" color={COLORS.appGray} />
        <SmallButton text="T" color={COLORS.appGray} />
        <SmallButton text="W" color={COLORS.appGray} />
        <SmallButton text="Th" color={COLORS.appGray} />
        <SmallButton text="F" color={COLORS.appGray} />
        <SmallButton text="Sa" color={COLORS.appGray} />
      </ViewHorizontal>
      <Container>
        <LongButton text="Everyday" color={COLORS.appYelow} />
      </Container>
      <Padding />

      <TextLabel label="Give me a reminder at" />
      <ViewHorizontal>
        <Bell />
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

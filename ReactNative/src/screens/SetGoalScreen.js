import React, { useState } from "react";
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
  const today = moment().format("MMM D, YYYY");

  return (
    <View>
      <PageHeader text="Set a Goal"></PageHeader>

      <Divider />
      <StartingDate>From Today: {today}</StartingDate>
      <BigTextInput></BigTextInput>
      <TextLabel label="When do you want to achieve your goal?" />
      <DatePicker />
      <DaysToCompletion>60 days to completion</DaysToCompletion>
      <Divider />

      <TextLabel label="Daily Habits to Achieve your Goal" />
      <Container>
        <TouchableOpacity style={{ flex: 1 }}>
          <Label>Exercise everyday for 1 hour</Label>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity style={{ flex: 1 }}>
          <Label>Drink a kale smoothie each day</Label>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity style={{ flex: 1 }}>
          <Label>Do IF with 8 hour eating window</Label>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity style={{ flex: 1 }}>
          <Label>-</Label>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity style={{ flex: 1 }}>
          <Label>-</Label>
        </TouchableOpacity>
      </Container>
      <BigButton text="Set Goal" />
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
`;

const DaysToCompletion = styled.Text`
  color: ${COLORS.appYelow};
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
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
  font-size: 12px;
  font-weight: bold;
  margin: auto auto;
`;

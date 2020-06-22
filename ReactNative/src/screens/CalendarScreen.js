import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import BellIcon from "../assets/images/Bell.svg";
import ModButton from "../components/ModButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Calendar, Agenda } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarScreen({ navigation }) {
  let nextDays = [
    "2020-06-01",
    "2020-06-05",
    "2020-06-08",
    "2020-06-07",
    "2020-06-18",
    "2020-06-17",
  ];

  let newDaysObject = {};

  nextDays.forEach((day) => {
    newDaysObject[day] = {
      selected: true,
      marked: true,
    };
  });

  return (
    <View>
      <PageHeader text="Calendar" hasHeader={false} />
      <Divider />
      <Padding />
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          console.log(day.dateString);
        }}
        markedDates={newDaysObject}
      />
    </View>
  );
}

export default CalendarScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
  align-items: center;
`;

const Padding = styled.View`
  align-items: center;
  padding-vertical: ${hp("1%")}px;
`;

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    width: wp("90%"),
    height: hp("50%"),
  },
});

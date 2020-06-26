import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import COLORS from "../styles/Colors";
import Divider from "../components/Divider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Calendar, Agenda } from "react-native-calendars";
import { StyleSheet, Platform } from "react-native";

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

  const [selected, setSelected] = useState("");

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  return (
    <View>
      <PageHeader text="Calendar" hasHeader={false} />
      <Divider />
      <Padding />
      <CalendarView>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          // Note: this is so that we can premark dates
          // markedDates={newDaysObject}
          markedDates={{
            [selected]: {
              selected: true,
            },
          }}
          theme={{
            arrowColor: COLORS.appBlue,
            textDayFontSize: wp("4%"),
            textMonthFontSize: wp("6%"),
            textDayHeaderFontSize: wp("3%"),
            "stylesheet.day.basic": {
              base: {
                height: hp("8"),
              },
              text: {
                marginTop: Platform.OS === "android" ? hp("2%") : hp("3%"),
                marginBottom: hp("3%"),
                marginLeft: 10,
                marginRight: 10,
                // fontSize: 18,
                // justifyContent: "space-around",
              },
            },
          }}
        />
      </CalendarView>
    </View>
  );
}

export default CalendarScreen;

const CalendarView = styled.View`
  background-color: ${COLORS.appBlue};
`;

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
    height: hp("70%"),
    // flexDirection: "row",
    // justifyContent: "space-around",
  },
});

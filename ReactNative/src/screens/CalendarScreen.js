import React from "react";
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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarScreen({ navigation }) {
  return (
    <View>
      <PageHeader text="Calendar" hasHeader={false} />
      <Divider />
      <Padding />
      <Calendar
        style={styles.calendar}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        // theme={{
        //   textDayFontSize: 16,
        //   textMonthFontSize: 40,
        //   textDayHeaderFontSize: 16,
        // }}
        // markedDates={{
        //   "2020-06-16": {
        //     selected: true,
        //     marked: true,
        //     selectedColor: "blue",
        //   },
        //   "2020-06-17": { marked: true },
        //   "2020-06-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        //   "2020-06-19": { disabled: true, disableTouchEvent: true },
        // }}
      />
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    width: wp("90%"),
    height: hp("70%"),
  },
});

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
  align-items: center;
`;

const Padding = styled.View`
  align-items: center;
  padding-vertical: ${hp("1%")}px;
`;

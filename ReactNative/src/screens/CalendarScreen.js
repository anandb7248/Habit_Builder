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
import { Calendar, Agenda } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarScreen({ navigation }) {
  return (
    <View>
      <PageHeader text="Calendar" hasHeader={false} />
      <Divider />
      <Padding />
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        theme={{
          backgroundColor: "#1A1410",
          selectedDayBackgroundColor: "#00adf5",
        }}
      />
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    width: wp("90%"),
    height: hp("60%"),
    justifyContent: "space-evenly",
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

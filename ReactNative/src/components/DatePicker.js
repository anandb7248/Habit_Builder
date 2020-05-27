import React, { useState } from "react";
import styled from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import COLORS from "../styles/Colors";

function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  const dateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle} style={{ flex: 1 }}>
        {/* <DateTimePicker value={date} mode="date" onChange={dateChange} /> */}
        <DateText>July 20, 2020 (Date Picker)</DateText>
      </TouchableOpacity>
    </View>
  );
}

export default DatePicker;

const View = styled.View`
  background: white;
  border-radius: 25px;
  width: 350px;
  height: 50px;
  margin: 15px auto;
`;

const DateText = styled.Text`
  color: ${COLORS.appBlue};
  font-size: 12px;
  font-weight: bold;
  margin: auto auto;
`;

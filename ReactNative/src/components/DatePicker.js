import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity, Animated, Button } from "react-native";
import COLORS from "../styles/Colors";

function DatePicker(props) {
  const topDatePicker = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.spring(topDatePicker, { toValue: -250 }).start();
  };

  const hide = () => {
    Animated.spring(topDatePicker, { toValue: 100 }).start();
  };

  const dateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    props.onChange(currentDate);
  };

  useEffect(() => {
    hide();
  }, []);

  if (props.show) {
    show();
  } else {
    hide();
  }

  return (
    <AnimatedView style={{ transform: [{ translateY: topDatePicker }] }}>
      <DoneButton
        title="Done"
        onPress={() => {
          props.toggle();
        }}
      ></DoneButton>
      <DateTimePicker
        modalTransparent={true}
        value={props.date}
        onChange={dateChange}
      />
    </AnimatedView>
  );
}

export default DatePicker;

const View = styled.View`
  background: white;
  border-radius: 25px;
  width: 95%;
  height: 300px;
  margin: 15px auto;
  z-index: 10;
`;

const DoneButton = styled.Button`
  align-items: flex-end;
`;

const AnimatedView = Animated.createAnimatedComponent(View);

const DateText = styled.Text`
  color: ${COLORS.appBlue};
  font-size: 16px;
  font-weight: bold;
  margin: auto auto;
  font-family: "PTSans-Regular";
`;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Animated } from "react-native";

function TimePicker(props) {
  const topTimePicker = useRef(new Animated.Value(0)).current;
  const [date, setDate] = useState(new Date());

  const show = () => {
    Animated.spring(topTimePicker, { toValue: -250 }).start();
  };
  const hide = () => {
    Animated.spring(topTimePicker, { toValue: 100 }).start();
  };

  const setTime = (event, date) => {
    if (date !== undefined) {
      // Use the hour and minute from the date object
    }
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
    <AnimatedView style={{ transform: [{ translateY: topTimePicker }] }}>
      <DoneButton
        title="Done"
        onPress={() => {
          props.toggle();
        }}
      ></DoneButton>
      <DateTimePicker
        modalTransparent={true}
        value={date}
        mode={"time"}
        onChange={setTime}
      />
    </AnimatedView>
  );
}

export default TimePicker;

const View = styled.View`
  background: white;
  border-radius: 25px;
  width: 95%;
  height: 300px;
  /* margin: 15px auto; /*
  z-index: 10;
`;

const DoneButton = styled.Button`
  align-items: flex-end;
`;

const AnimatedView = Animated.createAnimatedComponent(View);

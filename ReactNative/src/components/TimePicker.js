import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Animated, Platform } from "react-native";

function TimePicker(props) {
  const topTimePicker = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.spring(topTimePicker, { toValue: -250 }).start();
  };
  const hide = () => {
    Animated.spring(topTimePicker, { toValue: 100 }).start();
  };

  if (props.showIOS) {
    show();
  } else {
    hide();
  }

  if (Platform.OS === "ios") {
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
          value={props.date}
          mode={"time"}
          onChange={props.onChange}
        />
      </AnimatedView>
    );
  } else {
    // android
    return (
      <DateTimePicker
        value={props.date}
        mode={"time"}
        onChange={props.onChange}
      />
    );
  }
}

export default TimePicker;

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

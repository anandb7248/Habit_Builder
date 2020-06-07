import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function ReminderButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.container}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ReminderButton;

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("60%"),
    borderRadius: 25,
    backgroundColor: "white",
  },
});

const Text = styled.Text`
  margin: auto auto;
  color: #597099;
  font-size: ${wp("5%")}px;
  font-family: PTSans-Regular;
`;

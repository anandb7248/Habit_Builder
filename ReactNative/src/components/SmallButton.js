import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function SmallButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View backgroundColor={props.color} style={styles.container}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    height: wp("8%"),
    width: wp("8%"),
    borderRadius: 5,
  },
});

// const View = styled.View`
//   height: ${hp("2%")}px;
//   width: ${wp("2%")}px;
//   margin: 20px auto;
//   border-radius: 5px;
// `;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  font-size: ${wp("5%")}px;
  font-family: PTSans-Regular;
`;

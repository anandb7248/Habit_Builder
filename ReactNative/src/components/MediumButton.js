import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function MediumButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View backgroundColor={props.color} style={styles.container}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MediumButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 100,
    height: hp("5%"),
    width: wp("30%"),
    borderRadius: 5,
  },
});

// const View = styled.View`
//   /*height: 40px;
//   width: 100px;*/
//   height: ${hp("5%")};
//   width: ${wp("30%")};
//   border-radius: 5px;
// `;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  /*font-size: 12px;*/
  font-size: ${wp("3%")}px;
  font-family: PTSans-Regular;
`;

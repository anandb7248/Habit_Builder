import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function LongButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View backgroundColor={props.color} style={styles.container}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default LongButton;

const styles = StyleSheet.create({
  container: {
    // height: 37,
    // width: 347,
    height: hp("5%"),
    width: wp("85%"),
    borderRadius: 5,
    // margin: 20,
  },
});

// const View = styled.View`
//   height: 37px;
//   width: 347px;
//   margin: 20px auto;
//   border-radius: 5px;
// `;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  /* font-size: 22px;*/
  font-size: ${hp("3%")}px;
  font-family: PTSans-Regular;
`;

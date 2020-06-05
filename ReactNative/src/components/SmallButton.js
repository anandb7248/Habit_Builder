import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet } from "react-native";

function SmallButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View backgroundColor={props.color}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    borderRadius: 5,
  },
});

const View = styled.View`
  height: 35px;
  width: 35px;
  margin: 20px auto;
  border-radius: 5px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  font-size: 22px;
  font-family: PTSans-Regular;
`;

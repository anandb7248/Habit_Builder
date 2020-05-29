import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StyleSheet } from "react-native";

function MediumButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View backgroundColor={props.color}>
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
    borderRadius: 5,
  },
});

const View = styled.View`
  height: 40px;
  width: 100px;
  border-radius: 5px;
`;

const Text = styled.Text`
  margin: auto auto;
  color: #ffffff;
  font-size: 12px;
  font-family: PTSans-Regular;
`;

import React from "react";
import styled from "styled-components";
import { Image } from "react-native";

function Bell(props) {
  return (
    <Image
      source={require("../assets/images/Bell.png")}
      style={{
        height: props.size,
        width: props.size,
        alignItems: "center",
      }}
    />
  );
}

export default Bell;

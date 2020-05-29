import React from "react";
import styled from "styled-components";

function TextLabel(props) {
  return <Label>{props.label}</Label>;
}

export default TextLabel;

const Label = styled.Text`
  color: white;
  font-size: 18px;
  margin: 10px auto 5px;
  font-family: "PTSans-Regular";
`;

import React from "react";
import styled from "styled-components";

function Divider() {
  return <Line />;
}

export default Divider;

const Line = styled.View`
  width: 350px;
  margin: 20px auto;
  height: 1px;
  background-color: white;
`;

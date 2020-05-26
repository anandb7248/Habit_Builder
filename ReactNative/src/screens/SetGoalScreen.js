import React from "react";
import styled from "styled-components";
import COLORS from "../styles/Colors";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import BigButton from "../components/BigButton";
import moment from "moment";

function SetGoalScreen(props) {
  const today = moment().format("MMM D, YYYY");

  return (
    <View>
      <PageHeader text="Set a Goal"></PageHeader>
      <Divider />
      <StartingDate>{today}</StartingDate>

      <BigButton text="Set Goal" />
    </View>
  );
}

export default SetGoalScreen;

const View = styled.View`
  flex: 1;
  background-color: ${COLORS.appBlue};
`;

const StartingDate = styled.Text`
  font-size: 18px;
  color: white;
  margin: 0 auto;
  padding: 20px;
`;

const Label = styled.Text``;

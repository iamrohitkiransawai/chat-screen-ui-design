import React, { useState } from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchName,
  SwitchSlider,
  SwitchSliderChecked,
} from "../styles";

const AntDesignSwitch = ({ activeStatus, changeStatus }) => {
  return (
    <>
      <SwitchContainer>
        <SwitchInput type="checkbox" onChange={() => changeStatus()} />
        {activeStatus ? <SwitchSliderChecked /> : <SwitchSlider />}
        <SwitchName>{activeStatus ? "Active" : "Inactive"}</SwitchName>
      </SwitchContainer>
    </>
  );
};

export default AntDesignSwitch;

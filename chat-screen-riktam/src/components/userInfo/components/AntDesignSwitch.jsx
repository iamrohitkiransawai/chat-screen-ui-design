import React, { useState } from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchName,
  SwitchSlider,
  SwitchSliderChecked,
} from "../styles";

const AntDesignSwitch = ({ activeStatus }) => {
  const [isChecked, setIsChecked] = useState(activeStatus);

  return (
    <>
      <SwitchContainer>
        <SwitchInput
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
        {isChecked ? <SwitchSliderChecked /> : <SwitchSlider />}
        <SwitchName>{isChecked ? "Active" : "Inactive"}</SwitchName>
      </SwitchContainer>
    </>
  );
};

export default AntDesignSwitch;

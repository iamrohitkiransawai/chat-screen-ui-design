import styled from "styled-components";

export const UserName = styled.span`
  padding-right: 10px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => props.fontSize || "16px"};
`;

export const Dot = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.dotColor};
  color: ${(props) => props.textColor};
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  display: inline-block;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const UserNameInComp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Designation = styled.div`
  color: #576f72;
  font-size: ${(props) => props.fontSize};
  margin-bottom: 3px;
`;

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
`;

export const SwitchSlider = styled.span`
  cursor: pointer;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
  position: relative;

  &:before {
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    position: absolute;
  }
`;

export const SwitchSliderChecked = styled(SwitchSlider)`
  background-color: #2196f3;

  &:before {
    left: calc(100% - 18px);
  }
`;

export const SwitchName = styled.div`
  margin-left: 10px;
`;

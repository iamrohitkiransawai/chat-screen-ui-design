import styled from "styled-components";

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #85cdfd;
  color: #000;
  position: relative;
  margin: 50px;
`;

export const Letter = styled.div`
  font-size: 28px;
  color: #03001c;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoRoot = styled.div`
  display: flex;
  align-items: left;
  padding-left: 10px;
`;

export const InfoIcon = styled.div`
  margin-right: 5px;
`;

export const ArchiveBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 6px auto;
`;

export const NotificationRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.bColor};
`;

export const NotificationIcon = styled.div`
  color: #3f51b5;
  font-size: 34px;
`;

export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: ${(props) => props.bColor};
  margin-right: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 95%;
`;

export const Bar = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
`;

export const BarCircle = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
`;

export const ContainerBarCircle = styled.div`
  &:hover ${Bar} {
    background-color: ${(props) => props.hoverColor};
  }
  &:hover ${BarCircle} {
    background-color: ${(props) => props.hoverColor};
  }
`;

export const DayLabel = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const CopyLinkCompStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

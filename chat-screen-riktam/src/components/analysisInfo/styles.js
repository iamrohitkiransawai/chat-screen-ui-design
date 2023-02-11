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
  background-color: #e0e0e0;
`;

export const NotificationIcon = styled.div`
  color: #3f51b5;
  font-size: 34px;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

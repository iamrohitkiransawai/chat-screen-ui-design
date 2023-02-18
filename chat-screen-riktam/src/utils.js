import { faker } from "@faker-js/faker";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import moment from "moment";
import { FIRST, SECOND } from "./constants";

export const getListOfUsers = () => {
  let users = [];
  for (let i = 0; i < 7; i++) {
    users.push({
      id: i,
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
    });
  }
  return users;
};

export const getUserInitials = () => {
  return {
    width: 100,
    height: 100,
    position: "relative",
    borderRadius: "50%",
    background: "#4BBCF4",
  };
};

export const getSxForUserInfo = (backgroundColor, borderColor) => {
  return {
    borderRadius: 4,
    margin: 1.5,
    padding: 1,
    backgroundColor: `${backgroundColor}`,
    border: `1px solid ${borderColor}`,
  };
};

export const notificationSetting = [
  {
    purpose: "Time",
    backgroundColor: "#CAF0F8",
    backRgba: "rgba(0, 119, 182, 0.15)",
    forgroundColor: "#0077B6",
    Icon: WatchLaterTwoToneIcon,
  },
  {
    purpose: "Atendeed",
    backgroundColor: "#D8F3DC",
    forgroundColor: "#40916C",
    backRgba: "rgba(64, 145, 108, 0.15)",
    Icon: PeopleAltTwoToneIcon,
  },
  {
    purpose: "Meetings",
    backgroundColor: "#E0AAFF",
    forgroundColor: "#5A189A",
    backRgba: "rgba(90, 24, 154, 0.15)",
    Icon: EventAvailableTwoToneIcon,
  },
  {
    purpose: "Rejected",
    backgroundColor: "#FFD000",
    forgroundColor: "#FF7B00",
    backRgba: "rgba(255, 123, 0, 0.15)",
    Icon: ThumbDownTwoToneIcon,
  },
];

export const messageWithPurpose = {
  Time: `13h`,
  Atendeed: 188,
  Meetings: 119,
  Rejected: 41,
};

export const dateTimeReadInHumanizeWay = () => {
  // With the help of moment
  const savedTime = moment("2002-01-11T02:03:00");
  const timeDiff = moment().diff(savedTime);

  console.log(moment.duration(timeDiff).humanize());
};

export const dateTimeReadInHumanizeIntl = (savedTime) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const timeDiff = Date.now() - savedTime;
  const diffInSeconds = Math.floor(timeDiff / 1000);

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
  } else if (diffInSeconds < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), "month");
  }
};

export const getFirstSecondLetterOfName = (name, type) => {
  const [firstName, lastName, ...rest] = name.split(" ");
  let letter = "";
  switch (type) {
    case FIRST:
      letter = firstName[0];
      break;
    case SECOND:
      letter = lastName[0];
      break;
  }

  return letter;
};

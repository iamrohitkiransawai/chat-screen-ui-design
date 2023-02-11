import { faker } from "@faker-js/faker";

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
    // margin: "50",
    borderRadius: "50%",
    background: "#4BBCF4",
  };
};
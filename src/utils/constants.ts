import { EventDetails } from "./types";

export const testEvents: EventDetails[] = [
  {
    id: "1",
    name: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-01",
    timeStart: "10:00",
    timeEnd: "12:00",
    location: "Location 1",
    participants: 10,
    tags: ["Bembangan", "Party"],
  },
  {
    id: "2",
    name: "Event 2",
    description: "Description 2",
    date: "2023-01-01",
    timeStart: "10:00",
    timeEnd: "12:00",
    location: "Location 2",
    participants: 10,
    tags: ["Test", "Sample"],
  },
];

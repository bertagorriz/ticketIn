import { SessionStructure } from "../types";

export const sessionsMock: SessionStructure[] = [
  {
    id: 1,
    movieId: 1,
    dates: ["2023-11-15T18:30:00", "2023-11-16T18:00:00"],
    price: 9,
  },
  {
    id: 2,
    movieId: 2,
    dates: ["2023-11-17T19:00:00", "2023-11-18T20:00:00"],
    price: 9,
  },
];

export const emptySessionsMock: SessionStructure[] = [];

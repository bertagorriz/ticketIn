import { SessionsStructure } from "../types";

export const sessionsMock: SessionsStructure[] = [
  {
    id: 1,
    movieId: 1,
    dates: "2023-11-15T18:30:00",
    price: 9,
  },
  {
    id: 2,
    movieId: 2,
    dates: "2023-11-17T19:00:00",
    price: 9,
  },
];

export const emptySessionsMock: SessionsStructure[] = [];

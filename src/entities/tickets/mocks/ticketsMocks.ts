import { TicketStructure } from "../types";

export const ticketsMocks: TicketStructure[] = [
  {
    id: 1,
    movieId: 1,
    sessionId: 1,
    seats: ["r1s3", "r1s4"],
    url: "url-del-ticket",
    price: 18,
  },
  {
    id: 2,
    movieId: 1,
    sessionId: 1,
    seats: ["r1s3", "r1s4"],
    url: "url-del-ticket",
    price: 18,
  },
];

export const createdTicketMock: TicketStructure = {
  id: 3,
  movieId: 1,
  sessionId: 1,
  seats: ["r1s3"],
  url: "url-del-ticket-created",
  price: 18,
};

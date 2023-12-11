import { TicketStructure } from "../slice/types";

export const ticketMock: TicketStructure[] = [
  {
    id: 1,
    movieId: 1,
    sessionId: 1,
    seats: ["r1s3", "r1s4"],
    url: "url-del-ticket",
    price: 18,
  },
];

export const addedTicketMock: TicketStructure = {
  id: 2,
  movieId: 2,
  sessionId: 2,
  seats: ["r2s2", "r2s2"],
  url: "url-del-ticket",
  price: 27,
};

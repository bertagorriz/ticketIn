import { createdTicketMock, ticketsMocks } from "../../mocks/ticketsMocks";
import { addTicketActionCreator, ticketReducer } from "../ticketsSlice";
import { TicketState } from "../types";

describe("Given an addTicket reducer", () => {
  describe("When it receives a ticket and the action to add a new ticket", () => {
    test("Then it should return a collection of two tickets", () => {
      const currentTicketState: TicketState = {
        ticketsData: ticketsMocks,
        selectedTicket: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };

      const expectedNewState: TicketState = {
        ticketsData: [...ticketsMocks, createdTicketMock],
        selectedTicket: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };

      const addTicketAction = addTicketActionCreator(createdTicketMock);

      const newState: TicketState = ticketReducer(
        currentTicketState,
        addTicketAction,
      );

      expect(expectedNewState).toStrictEqual(newState);
    });
  });
});

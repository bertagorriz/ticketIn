import { addedTicketMock, ticketsMock } from "../../mocks/ticketsMocks";
import { addTicketActionCreator, ticketReducer } from "../ticketsSlice";
import { TicketState } from "../types";

describe("Given an addTicket reducer", () => {
  describe("When it receives a ticket and the action to add a new ticket", () => {
    test("Then it should return a collection of two tickets", () => {
      const currentTicketState: TicketState = {
        ticketsData: ticketsMock,
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
        ticketsData: [...ticketsMock, addedTicketMock],
        selectedTicket: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };

      const addTicketAction = addTicketActionCreator(addedTicketMock);

      const newState: TicketState = ticketReducer(
        currentTicketState,
        addTicketAction,
      );

      expect(expectedNewState).toStrictEqual(newState);
    });
  });
});

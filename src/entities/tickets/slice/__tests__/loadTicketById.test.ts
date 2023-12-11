import { ticketMock } from "../../mocks/ticketsMocks";
import { loadTicketByIdActionCreator, ticketReducer } from "../ticketSlice";
import { TicketState } from "../types";

describe("Given a loadTicketById reducer", () => {
  describe("When it receives an empty 'ticketData' state and a loadTicketById action with a ticket as payload", () => {
    test("Then it should return a new state with the ticket", () => {
      const currentEmptyState: TicketState = {
        ticketData: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };
      const expectedNewTicketState: TicketState = {
        ticketData: ticketMock,
      };

      const loadTicketById = loadTicketByIdActionCreator(ticketMock);

      const newState: TicketState = ticketReducer(
        currentEmptyState,
        loadTicketById,
      );

      expect(expectedNewTicketState).toStrictEqual(newState);
    });
  });
});

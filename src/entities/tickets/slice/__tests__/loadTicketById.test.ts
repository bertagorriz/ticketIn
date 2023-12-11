import { ticketsMocks } from "../../mocks/ticketsMocks";
import { loadTicketByIdActionCreator, ticketReducer } from "../ticketsSlice";
import { TicketState } from "../types";

describe("Given a loadTicketById reducer", () => {
  describe("When it receives an empty 'ticketData' state and a loadTicketById action with a ticket as payload", () => {
    test("Then it should return a new state with the ticket", () => {
      const currentEmptyState: TicketState = {
        ticketsData: [],
        selectedTicket: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };
      const expectedNewTicketState: TicketState = {
        ticketsData: [],
        selectedTicket: ticketsMocks[0],
      };

      const loadTicketById = loadTicketByIdActionCreator(ticketsMocks[0]);

      const newState: TicketState = ticketReducer(
        currentEmptyState,
        loadTicketById,
      );

      expect(expectedNewTicketState).toStrictEqual(newState);
    });
  });
});

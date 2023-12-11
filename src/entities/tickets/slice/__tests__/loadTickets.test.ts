import { ticketsMocks } from "../../mocks/ticketsMocks";
import { loadTicketsActionCreator, ticketReducer } from "../ticketsSlice";
import { TicketState, TicketStructure } from "../types";

describe("Given a loadTickets reducer", () => {
  describe("When it receives an empty tickets state and the action to load two tickets", () => {
    test("Then it should return a list of two tickets", () => {
      const currentEmptyState: TicketStructure[] = [];

      const currentTicketState: TicketState = {
        ticketsData: currentEmptyState,
        selectedTicket: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          seats: [],
          url: "",
          price: 0,
        },
      };

      const loadTickets = loadTicketsActionCreator(ticketsMocks);

      const expectedNewMovieState: TicketState = {
        ...currentTicketState,
        ticketsData: ticketsMocks,
      };

      const newState: TicketState = ticketReducer(
        currentTicketState,
        loadTickets,
      );

      expect(expectedNewMovieState).toStrictEqual(newState);
    });
  });
});

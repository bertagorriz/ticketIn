import { renderHook } from "@testing-library/react";
import apiUrl from "../../../utils/apiUrl/apiUrl";
import { createdTicketMock, ticketsMocks } from "../mocks/ticketsMocks";
import AxiosTicketsClient from "../services/AxiosTicketsClient";
import { TicketStructure } from "../types";
import useTickets from "./useTickets";
import { wrapWithProviders } from "../../../utils/testUtils";
import { server } from "../../../mocks/node";
import { errorHandlers } from "../../../mocks/handlers";

const ticketsClient = new AxiosTicketsClient(apiUrl);

describe("Given a getTickets function", () => {
  describe("When it is invoked", () => {
    test("Then it should return a list of two tickets", async () => {
      const ticketsList: TicketStructure[] = ticketsMocks;

      const {
        result: {
          current: { getTickets },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedTicketsList = await getTickets();

      expect(expectedTicketsList).toStrictEqual(ticketsList);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, tickets couldn't be loaded' error", () => {
      server.resetHandlers(...errorHandlers);
      const expectedError = "Sorry, tickets couldn't be loaded";

      const {
        result: {
          current: { getTickets },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const ticketsList = getTickets();

      expect(ticketsList).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a getOneTicket function", () => {
  const ticketId = "1";

  describe("When it is invoked", () => {
    test("Then it should return one ticket", async () => {
      const ticket: TicketStructure = ticketsMocks[0];

      const {
        result: {
          current: { getOneTicket },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedTicket = await getOneTicket(ticketId);

      expect(expectedTicket).toStrictEqual(ticket);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, ticket couldn't be loaded' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Sorry, ticket couldn't be loaded";

      const {
        result: {
          current: { getOneTicket },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedTicket = getOneTicket(ticketId);

      expect(expectedTicket).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a createTicket function", () => {
  const ticket: TicketStructure = createdTicketMock;

  describe("When it is invoked", () => {
    test("Then it should return the created ticket", async () => {
      const {
        result: {
          current: { createTicket },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedTicket = await createTicket(ticket);

      expect(expectedTicket).toStrictEqual(ticket);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, ticket couldn't be created' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Sorry, ticket couldn't be created";

      const {
        result: {
          current: { createTicket },
        },
      } = renderHook(() => useTickets(ticketsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedTicket = createTicket(ticket);

      expect(expectedTicket).rejects.toThrowError(expectedError);
    });
  });
});

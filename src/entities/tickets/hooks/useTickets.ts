import { useCallback } from "react";
import { useAppDispatch } from "../../../store";
import TicketsClient from "../services/types";
import { TicketStructure } from "../types";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../ui/uiSlice";
import showToast from "../../../toast/showToast";

const useTickets = (ticketsClient: TicketsClient) => {
  const dispatch = useAppDispatch();

  const getTickets = useCallback(async (): Promise<TicketStructure[]> => {
    try {
      dispatch(showSkeletonActionCreator());

      const tickets = await ticketsClient.getTickets();

      dispatch(hideSkeletonActionCreator());
      return tickets;
    } catch {
      dispatch(hideSkeletonActionCreator());

      const error = "Sorry, tickets couldn't be loaded";
      showToast(error, "error");
      throw error;
    }
  }, [dispatch, ticketsClient]);

  const getOneTicket = useCallback(
    async (id: string): Promise<TicketStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const ticket = await ticketsClient.getOneTicket(id);

        dispatch(hideSkeletonActionCreator());

        return ticket;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, ticket couldn't be loaded";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch, ticketsClient],
  );

  const createTicket = useCallback(
    async (ticketData: TicketStructure): Promise<TicketStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const ticket = await ticketsClient.createTicket(ticketData);

        dispatch(hideSkeletonActionCreator());

        return ticket;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, ticket couldn't be created";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch, ticketsClient],
  );

  return { getTickets, getOneTicket, createTicket };
};

export default useTickets;

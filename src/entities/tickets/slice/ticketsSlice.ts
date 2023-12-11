import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TicketState, TicketStructure } from "./types";

const initialTicketState: TicketState = {
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

export const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialTicketState,
  reducers: {
    loadTicketById: (
      currentTicketState,
      action: PayloadAction<TicketStructure>,
    ): TicketState => ({
      ...currentTicketState,
      selectedTicket: action.payload,
    }),
    addTicket: (
      currentTicketState,
      action: PayloadAction<TicketStructure>,
    ): TicketState => ({
      ...currentTicketState,
      ticketsData: [...currentTicketState.ticketsData, action.payload],
    }),
    loadTickets: (
      currentTicketState,
      action: PayloadAction<TicketStructure[]>,
    ): TicketState => ({
      ...currentTicketState,
      ticketsData: [...action.payload],
    }),
  },
});

export const {
  loadTicketById: loadTicketByIdActionCreator,
  addTicket: addTicketActionCreator,
  loadTickets: loadTicketsActionCreator,
} = ticketSlice.actions;

export const ticketReducer = ticketSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TicketState, TicketStructure } from "./types";

const initialTicketState: TicketState = {
  ticketData: {
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
      ticketData: action.payload,
    }),
  },
});

export const { loadTicketById: loadTicketByIdActionCreator } =
  ticketSlice.actions;

export const ticketReducer = ticketSlice.reducer;

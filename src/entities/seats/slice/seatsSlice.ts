import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SeatsState, SeatsStructure } from "../types";

const initialSeatsState: SeatsState = {
  seatsData: {
    id: 0,
    movieId: 0,
    sessionId: 0,
    reserved: [],
  },
};

export const seatsSlice = createSlice({
  name: "seats",
  initialState: initialSeatsState,
  reducers: {
    loadSeatsBySession: (
      currentSeatsState,
      action: PayloadAction<SeatsStructure>,
    ): SeatsState => ({
      ...currentSeatsState,
      seatsData: action.payload,
    }),
    updateSelectedSeats: (
      currentSeatsState,
      action: PayloadAction<string[]>,
    ): SeatsState => ({
      ...currentSeatsState,
      seatsData: {
        ...currentSeatsState.seatsData,
        reserved: [...action.payload],
      },
    }),
    resetSeatState: (): SeatsState => initialSeatsState,
  },
});

export const {
  loadSeatsBySession: loadSeatsBySessionActionCreator,
  updateSelectedSeats: updateSelectedSeatsActionCreator,
  resetSeatState: resetSeatStateActionCreator,
} = seatsSlice.actions;

export const seatsReducer = seatsSlice.reducer;

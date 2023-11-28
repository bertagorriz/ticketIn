import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SessionsState, SessionsStructure } from "../types";

const initialSessionsState: SessionsState = {
  sessionsData: [],
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState: initialSessionsState,
  reducers: {
    loadSessionsByMovie: (
      currentSessionsState,
      action: PayloadAction<SessionsStructure[]>,
    ): SessionsState => ({
      ...currentSessionsState,
      sessionsData: action.payload,
    }),
  },
});

export const { loadSessionsByMovie: loadSessionsActionCreator } =
  sessionsSlice.actions;

export const sessionsReducer = sessionsSlice.reducer;

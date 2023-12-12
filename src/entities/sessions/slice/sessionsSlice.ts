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
    resetSessionsState: (): SessionsState => initialSessionsState,
  },
});

export const {
  loadSessionsByMovie: loadSessionsActionCreator,
  resetSessionsState: resetSessionsStateActionCreator,
} = sessionsSlice.actions;

export const sessionsReducer = sessionsSlice.reducer;

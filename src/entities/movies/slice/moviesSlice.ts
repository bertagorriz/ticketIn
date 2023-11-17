import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, MovieStructure } from "../types";

const initialMoviesState: MoviesState = {
  moviesData: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentMoviesState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesState => ({
      ...currentMoviesState,
      moviesData: [...action.payload],
    }),
  },
});

export const { loadMovies: loadMoviesActionCreator } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;

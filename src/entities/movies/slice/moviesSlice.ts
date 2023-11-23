import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, MovieStructure } from "../types";

const initialMoviesState: MoviesState = {
  moviesData: [],
  selectedMovie: {
    id: 0,
    title: "",
    director: "",
    posterUrl: [],
    synopsis: "",
    runtime: "",
    genre: "",
  },
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
    loadMovieById: (
      currentMoviesState,
      action: PayloadAction<MovieStructure>,
    ): MoviesState => ({
      ...currentMoviesState,
      selectedMovie: action.payload,
    }),
    resetStateStore: (): MoviesState => initialMoviesState,
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  loadMovieById: loadMovieByIdActionCreator,
  resetStateStore: resetStateStoreActionCreator,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;

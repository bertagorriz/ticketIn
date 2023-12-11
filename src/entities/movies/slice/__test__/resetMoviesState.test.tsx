import {
  emptyMovieMock,
  emptyMoviesListMock,
  moviesMock,
} from "../../mocks/moviesMock";
import { MoviesState } from "../../types";
import { moviesReducer, resetMoviesStoreActionCreator } from "../moviesSlice";

describe("Given a resetSliceState reducer", () => {
  describe("When it called", () => {
    test("Then it should return a reseted state", () => {
      const currentMoviesState: MoviesState = {
        moviesData: emptyMoviesListMock,
        selectedMovie: moviesMock[0],
      };

      const expectedNewEmptyState: MoviesState = {
        moviesData: [],
        selectedMovie: emptyMovieMock,
      };

      const resetStateSlice = resetMoviesStoreActionCreator();

      const newState: MoviesState = moviesReducer(
        currentMoviesState,
        resetStateSlice,
      );

      expect(expectedNewEmptyState).toStrictEqual(newState);
    });
  });
});

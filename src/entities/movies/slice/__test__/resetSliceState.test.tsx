import {
  emptyMovieMock,
  emptyMoviesListMock,
  moviesMock,
} from "../../mocks/moviesMock";
import { MoviesState } from "../../types";
import { moviesReducer, resetStateStoreActionCreator } from "../moviesSlice";

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

      const resetStateSlice = resetStateStoreActionCreator();

      const newState: MoviesState = moviesReducer(
        currentMoviesState,
        resetStateSlice,
      );

      expect(expectedNewEmptyState).toStrictEqual(newState);
    });
  });
});

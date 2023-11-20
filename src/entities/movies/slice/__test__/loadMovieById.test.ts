import {
  emptyMovieMock,
  emptyMoviesListMock,
  moviesMock,
} from "../../mocks/moviesMock";
import { MoviesState } from "../../types";
import { loadMovieByIdActionCreator, moviesReducer } from "../moviesSlice";

describe("Given a loadMovieById reducer", () => {
  describe("When it receives an empty 'selectedMovie' state and a loadMovieById action with the Barbie movie as payload", () => {
    test("Then it should return a new state with the Barbie movie", () => {
      const currentEmptyState: MoviesState = {
        moviesData: [],
        selectedMovie: emptyMovieMock,
      };
      const expectedNewMoviesState: MoviesState = {
        moviesData: emptyMoviesListMock,
        selectedMovie: moviesMock[0],
      };

      const loadMovieById = loadMovieByIdActionCreator(moviesMock[0]);

      const newState: MoviesState = moviesReducer(
        currentEmptyState,
        loadMovieById,
      );

      expect(expectedNewMoviesState).toStrictEqual(newState);
    });
  });
});

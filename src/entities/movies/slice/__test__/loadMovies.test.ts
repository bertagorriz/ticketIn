import { emptyMovieMock, moviesMock } from "../../mocks/moviesMock";
import { MovieStructure, MoviesState } from "../../types";
import { loadMoviesActionCreator, moviesReducer } from "../moviesSlice";

describe("Given a loadMovies reducer", () => {
  describe("When it receives an empty movies state and the action to load two movies", () => {
    test("Then it should return a list with two movies", () => {
      const currentEmptyState: MovieStructure[] = [];

      const currentMoviesState: MoviesState = {
        moviesData: currentEmptyState,
        selectedMovie: emptyMovieMock,
      };

      const loadMovies = loadMoviesActionCreator(moviesMock);

      const expectedNewMoviesState: MoviesState = {
        ...currentMoviesState,
        moviesData: moviesMock,
      };

      const newState: MoviesState = moviesReducer(
        currentMoviesState,
        loadMovies,
      );

      expect(expectedNewMoviesState).toStrictEqual(newState);
    });
  });
});

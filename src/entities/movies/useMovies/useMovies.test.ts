import { renderHook } from "@testing-library/react";
import { moviesMock } from "../../../mocks/moviesMocks/moviesMock";
import { MovieStructure } from "../types";
import useMovies from "./useMovies";
import { wrapWithProviders } from "../../../utils/testUtils";
import { server } from "../../../mocks/moviesMocks/node";
import { errorHandlers } from "../../../mocks/moviesMocks/handlers";

describe("Given a getMovies function", () => {
  describe("When it is invoked", () => {
    test("Then it should return a list of two movies", async () => {
      const moviesList: MovieStructure[] = moviesMock;

      const {
        result: {
          current: { getMovies },
        },
      } = renderHook(() => useMovies(), { wrapper: wrapWithProviders });

      const expectedMovieList = await getMovies();

      expect(expectedMovieList).toStrictEqual(moviesList);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, movies couldn't be loaded' error", () => {
      server.resetHandlers(...errorHandlers);
      const expectedError = "Sorry, movies couldn't be loaded";

      const {
        result: {
          current: { getMovies },
        },
      } = renderHook(() => useMovies(), { wrapper: wrapWithProviders });

      const movieList = getMovies();

      expect(movieList).rejects.toThrowError(expectedError);
    });
  });
});

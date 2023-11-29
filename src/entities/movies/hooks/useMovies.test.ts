import { renderHook } from "@testing-library/react";
import { moviesMock } from "../mocks/moviesMock";
import { MovieStructure } from "../types";
import useMovies from "./useMovies";
import { wrapWithProviders } from "../../../utils/testUtils";
import { server } from "../../../mocks/node";
import { errorHandlers } from "../../../mocks/handlers";
import AxiosMoviesClient from "../services/AxiosMoviesClient";
import apiUrl from "../../../utils/apiUrl/apiUrl";

describe("Given a getMovies function", () => {
  describe("When it is invoked", () => {
    test("Then it should return a list of two movies", async () => {
      const moviesList: MovieStructure[] = moviesMock;
      const moviesClient = new AxiosMoviesClient(apiUrl);

      const {
        result: {
          current: { getMovies },
        },
      } = renderHook(() => useMovies(moviesClient), {
        wrapper: wrapWithProviders,
      });

      const expectedMovieList = await getMovies();

      expect(expectedMovieList).toStrictEqual(moviesList);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, movies couldn't be loaded' error", () => {
      server.resetHandlers(...errorHandlers);
      const expectedError = "Sorry, movies couldn't be loaded";
      const moviesClient = new AxiosMoviesClient(apiUrl);

      const {
        result: {
          current: { getMovies },
        },
      } = renderHook(() => useMovies(moviesClient), {
        wrapper: wrapWithProviders,
      });

      const movieList = getMovies();

      expect(movieList).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a getOneMovie function", () => {
  const movieId = "1";

  describe("When it is invoked", () => {
    test("Then it should return one movie", async () => {
      const moviesList: MovieStructure = moviesMock[1];

      const {
        result: {
          current: { getOneMovie },
        },
      } = renderHook(() => useMovies(), { wrapper: wrapWithProviders });

      const expectedMovieList = await getOneMovie(movieId);

      expect(expectedMovieList).toStrictEqual(moviesList);
    });
  });

  describe("When it is invoked and there is an error", () => {
    test("Then it should throw an 'Sorry, movie couldn't be loaded' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Sorry, movie couldn't be loaded";

      const {
        result: {
          current: { getOneMovie },
        },
      } = renderHook(() => useMovies(), { wrapper: wrapWithProviders });

      const movieList = getOneMovie(movieId);

      expect(movieList).rejects.toThrowError(expectedError);
    });
  });
});

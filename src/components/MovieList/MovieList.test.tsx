import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MovieList from "./MovieList";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";

describe("Given a MovieList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of movies", () => {
      const totalMovies = 2;

      renderWithProviders(wrapWithRouter(<MovieList />), {
        movies: { moviesData: moviesMock },
      });

      const expectedResult = screen.getAllByRole("article");

      expect(expectedResult).toHaveLength(totalMovies);
    });
  });
});

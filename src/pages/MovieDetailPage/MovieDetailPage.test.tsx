import { screen } from "@testing-library/react";
import MovieDetailPage from "./MovieDetailPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";

const renderMovieDetailPage = (boolean: boolean) => {
  renderWithProviders(wrapWithRouter(<MovieDetailPage />), {
    movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
    ui: { isLoading: boolean },
  });
};

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the movie title 'Barbie'", () => {
      const expectedTitle = "Barbie";

      renderMovieDetailPage(false);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the movie director 'Greta Gerwig'", () => {
      const expectedDirector = "Greta Gerwig";

      renderMovieDetailPage(false);

      const director = screen.getByRole("heading", { name: expectedDirector });

      expect(director).toBeInTheDocument();
    });

    test("Then it shouldn't show a 'Sessions' title", () => {
      const expectedTitle = "Sessions";

      renderMovieDetailPage(true);

      const title = screen.queryByRole("heading", { name: expectedTitle });

      expect(title).not.toBeInTheDocument();
    });
  });
});

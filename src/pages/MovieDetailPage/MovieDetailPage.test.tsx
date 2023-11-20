import { screen } from "@testing-library/react";
import MovieDetailPage from "./MovieDetailPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";

const renderMovieDetailPage = () => {
  renderWithProviders(wrapWithRouter(<MovieDetailPage />), {
    movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
  });
};

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the movie title 'Barbie'", async () => {
      const expectedTitle = "Barbie";

      renderMovieDetailPage();

      const title = await screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the movie director 'Greta Gerwig'", () => {
      const expectedDirector = "Greta Gerwig";

      renderMovieDetailPage();

      const director = screen.getByRole("heading", { name: expectedDirector });

      expect(director).toBeInTheDocument();
    });

    test("Then it should show a 'Sessions' title", () => {
      const expectedTitle = "Sessions";

      renderMovieDetailPage();

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

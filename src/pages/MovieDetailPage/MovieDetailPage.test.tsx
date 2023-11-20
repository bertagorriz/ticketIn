import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MovieDetailPage from "./MovieDetailPage";

const renderMovieDetailPage = () => {
  renderWithProviders(wrapWithRouter(<MovieDetailPage />));
};

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the movie title 'Barbie'", () => {
      renderMovieDetailPage();

      const expectedTitle = "Barbie";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the movie director 'Greta Gerwig'", () => {
      renderMovieDetailPage();

      const expectedDirector = "Greta Gerwig";

      const director = screen.getByRole("heading", { name: expectedDirector });

      expect(director).toBeInTheDocument();
    });

    test("Then it should show a 'Sessions' title", () => {
      renderMovieDetailPage();

      const expectedTitle = "Sessions";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MovieListPage from "./MovieListPage";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";

const renderMovieListPage = () => {
  renderWithProviders(wrapWithRouter(<MovieListPage />), {
    movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
  });
};

describe("Given a MovieListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Choose a movie'", async () => {
      const expectedTitle = "Choose a movie";

      renderMovieListPage();

      const title = await screen.findByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it shouldn't show a title with the text 'Choose a movie'", () => {
      const expectedTitle = "Choose a movie";

      renderMovieListPage();

      const title = screen.queryByRole("heading", { name: expectedTitle });

      expect(title).not.toBeInTheDocument();
    });
  });
});

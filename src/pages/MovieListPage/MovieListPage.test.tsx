import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import MovieListPage from "./MovieListPage";
import { server } from "../../mocks/node";
import { handlers } from "../../mocks/handlers";

const renderMovieListPage = () => {
  renderWithProviders(<MovieListPage />);
};

describe("Given a MovieListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Choose a movie'", async () => {
      server.resetHandlers(...handlers);

      const expectedTitle = "Choose a movie";

      renderMovieListPage();

      const title = await screen.findByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it shouldn't show a title with the text 'Choose a movie'", () => {
      server.resetHandlers(...handlers);

      const expectedTitle = "Choose a movie";

      renderMovieListPage();

      const title = screen.queryByRole("heading", { name: expectedTitle });

      expect(title).not.toBeInTheDocument();
    });
  });
});

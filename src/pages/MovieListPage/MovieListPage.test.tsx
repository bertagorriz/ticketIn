import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import MovieListPage from "./MovieListPage";

const renderMovieListPage = () => {
  renderWithProviders(<MovieListPage />);
};

describe("Given a MovieListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Choose a movie'", () => {
      renderMovieListPage();

      const expectedTitle = "Choose a movie";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

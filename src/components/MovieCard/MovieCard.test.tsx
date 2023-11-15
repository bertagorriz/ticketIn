import { screen } from "@testing-library/react";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";
import { renderWithProviders } from "../../utils/testUtils";
import MovieCard from "./MovieCard";

describe("Given a MovieCard component", () => {
  describe("When it receives the movie 'Barbie'", () => {
    test("Then it should show an image with the alternative text 'Barbie poster'", () => {
      renderWithProviders(<MovieCard movieProps={moviesMock[0]} />);

      const expectedAlternativeText = `${moviesMock[0].title} poster`;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show the title 'Barbie'", () => {
      renderWithProviders(<MovieCard movieProps={moviesMock[0]} />);

      const expectedTitle = `${moviesMock[0].title}`;

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

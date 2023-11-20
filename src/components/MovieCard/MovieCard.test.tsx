import { screen } from "@testing-library/react";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MovieCard from "./MovieCard";

const renderMovieCard = () => {
  renderWithProviders(
    wrapWithRouter(<MovieCard movieProps={moviesMock[0]} />),
    {
      movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
    },
  );
};

describe("Given a MovieCard component", () => {
  describe("When it receives the movie 'Barbie'", () => {
    test("Then it should show an image with the alternative text 'Barbie poster'", () => {
      const expectedAlternativeText = `${moviesMock[0].title} poster`;

      renderMovieCard();

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show the title 'Barbie'", () => {
      const expectedTitle = `${moviesMock[0].title}`;

      renderMovieCard();

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

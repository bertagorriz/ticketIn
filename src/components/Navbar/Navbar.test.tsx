import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";
import paths from "../../routers/paths/paths";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'ticketIn Logo'", () => {
      const textImage = "ticketIn Logo";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user is not in the main page", () => {
    test("Then it should show a 'back' button", () => {
      const selectedMovie = moviesMock[0];

      const routes = [
        {
          path: paths.app,
          element: <Navbar />,
        },
        {
          path: paths.movies,
          element: <Navbar />,
        },
        {
          path: `${paths.movies}/${selectedMovie.id}`,
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      router.state.location.pathname = `${paths.movies}/${selectedMovie.id}`;

      const textImage = "back to page button";

      renderWithProviders(<RouterProvider router={router} />, {
        movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
        ui: { isLoading: false },
      });

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});

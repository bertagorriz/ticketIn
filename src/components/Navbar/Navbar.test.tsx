import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";
import path from "../../routers/paths/paths";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

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
      const routes = [
        {
          path: path.app,
          element: <Navbar />,
        },
        {
          path: path.movies,
          element: <Navbar />,
        },
        {
          path: path.sessions,
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      router.state.location.pathname = path.sessions;

      const textImage = "back to page button";

      renderWithProviders(<RouterProvider router={router} />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";

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
      const textImage = "back to page button";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});

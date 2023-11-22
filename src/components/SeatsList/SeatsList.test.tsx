import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsList from "./SeatsList";

describe("Given a SeatsList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of four rows each with five seats", () => {
      const totalSeats = 20;

      renderWithProviders(wrapWithRouter(<SeatsList />));

      const expectedSeats = screen.getAllByRole("img");

      expect(expectedSeats).toHaveLength(totalSeats);
    });
  });
});

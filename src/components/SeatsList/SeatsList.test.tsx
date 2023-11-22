import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsList from "./SeatsList";

describe("Given a SeatsList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of four rows each with five seats", () => {
      const totalSeats = 20;

      renderWithProviders(wrapWithRouter(<SeatsList />));

      const expectedSeats = screen.getAllByRole("img", { name: "seat" });

      expect(expectedSeats).toHaveLength(totalSeats);
    });

    test("Then it should show a legend with available, selected and reserved colors", () => {
      const availableText = "available seat color";
      const selectedText = "selected seat color";
      const reservedText = "reserved seat color";

      renderWithProviders(wrapWithRouter(<SeatsList />));

      const expectedAvailableLegend = screen.getByRole("img", {
        name: availableText,
      });
      const expectedSelectedLegend = screen.getByRole("img", {
        name: selectedText,
      });
      const expectedReservedLegend = screen.getByRole("img", {
        name: reservedText,
      });

      expect(expectedAvailableLegend).toBeInTheDocument();
      expect(expectedSelectedLegend).toBeInTheDocument();
      expect(expectedReservedLegend).toBeInTheDocument();
    });
  });
});

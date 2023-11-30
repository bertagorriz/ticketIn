import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsList from "./SeatsList";

beforeEach(() => {
  renderWithProviders(wrapWithRouter(<SeatsList />));
});

describe("Given a SeatsList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of four rows each with five seats", () => {
      const totalSeats = 20;

      const expectedSeats = screen.getAllByRole("img", {
        name: "available seat",
      });

      expect(expectedSeats).toHaveLength(totalSeats);
    });

    test("Then it should show a legend with available, selected and reserved colors", () => {
      const availableText = "available seat color";
      const selectedText = "selected seat color";
      const reservedText = "reserved seat color";

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

    test("Then it should show the cinema screen", () => {
      const screenText = "screen";

      const expectedScreen = screen.getByRole("img", {
        name: screenText,
      });

      expect(expectedScreen).toBeInTheDocument();
    });
  });
});

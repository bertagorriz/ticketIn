import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsPage from "./SeatsPage";

describe("Given a SeatsPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Choose your seats'", async () => {
      const expectedTitle = "Choose your seats";

      renderWithProviders(wrapWithRouter(<SeatsPage />));

      const title = await screen.findByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

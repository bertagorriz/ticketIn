import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it receives an url and is rendered", () => {
    test("Then it should show that url", () => {
      const expectedUrl = "http://myticket.pachuru";

      renderWithProviders(wrapWithRouter(<Modal url={expectedUrl} />));

      const modal = screen.getByText(expectedUrl);

      expect(modal).toBeInTheDocument();
    });
  });
});

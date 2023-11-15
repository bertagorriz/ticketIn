import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered and receives the hour of a session", () => {
    test("Then it should show the hour of session inside", () => {
      const expectedText = "16:30";

      renderWithProviders(
        <Button classname="session-button" text={expectedText} />,
      );
      const sessionButton = screen.getByRole("button", { name: expectedText });

      expect(sessionButton).toBeInTheDocument();
    });
  });
});

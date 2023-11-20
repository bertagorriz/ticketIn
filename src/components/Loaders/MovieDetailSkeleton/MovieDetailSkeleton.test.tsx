import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import MovieDetailSkeleton from "./MovieDetailSkeleton";

describe("Given a MovieDetailSkeleton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a skeleton loader", () => {
      const loadingText = "skeleton";

      renderWithProviders(<MovieDetailSkeleton />);

      const expectedLoading = screen.getByLabelText(loadingText);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import MovieListSkeleton from "./MovieListSkeleton";

describe("Given a MovieListSkeleton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a skeleton loader", () => {
      const loadingText = "skeleton";

      renderWithProviders(<MovieListSkeleton />);

      const expectedLoading = screen.getByLabelText(loadingText);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});

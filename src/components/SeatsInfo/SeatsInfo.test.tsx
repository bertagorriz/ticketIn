import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsInfo from "./SeatsInfo";

describe("Given a SeatsInfo component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a movie icon", () => {
      const movieIcon = "movie";

      renderWithProviders(
        wrapWithRouter(
          <SeatsInfo movie={""} date={[]} row={""} seats={[]} price={0} />,
        ),
      );

      const expectedMovieIcon = screen.getByRole("img", { name: movieIcon });

      expect(expectedMovieIcon).toBeInTheDocument();
    });
  });
});

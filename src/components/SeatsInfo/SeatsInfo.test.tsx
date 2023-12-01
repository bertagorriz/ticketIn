import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsInfo from "./SeatsInfo";
import { sessionsMock } from "../../entities/sessions/mocks/sessionsMock";
import convertDateTime from "../../convertDates/convertDates";

describe("Given a SeatsInfo component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a movie icon", () => {
      const movieIcon = "movie";

      renderWithProviders(
        wrapWithRouter(
          <SeatsInfo
            movie={""}
            seats={[]}
            price={0}
            date={convertDateTime(sessionsMock[0].dates)}
          />,
        ),
      );

      const expectedMovieIcon = screen.getByRole("img", { name: movieIcon });

      expect(expectedMovieIcon).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SeatsPage from "./SeatsPage";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";
import { sessionsMock } from "../../entities/sessions/mocks/sessionsMock";

describe("Given a SeatsPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Choose your seats'", async () => {
      const expectedTitle = "Choose your seats";

      renderWithProviders(wrapWithRouter(<SeatsPage />), {
        movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
        sessions: { sessionsData: sessionsMock },
        ui: { isLoading: false },
      });

      const title = await screen.findByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

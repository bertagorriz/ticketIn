import { screen } from "@testing-library/react";
import MovieDetailPage from "./MovieDetailPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { moviesMock } from "../../entities/movies/mocks/moviesMock";
import { sessionsMock } from "../../entities/sessions/mocks/sessionsMock";

beforeEach(() => {
  vi.clearAllMocks();
});

const renderMovieDetailPage = (boolean: boolean) => {
  renderWithProviders(wrapWithRouter(<MovieDetailPage />), {
    movies: { moviesData: moviesMock, selectedMovie: moviesMock[0] },
    ui: { isLoading: boolean },
    sessions: { sessionsData: sessionsMock },
  });
};

const spyScrollTo = vi.fn();
Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the movie title 'Barbie'", () => {
      const expectedTitle = "Barbie";

      renderMovieDetailPage(false);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the movie director 'Greta Gerwig'", () => {
      const expectedDirector = "Greta Gerwig";

      renderMovieDetailPage(false);

      const director = screen.getByRole("heading", { name: expectedDirector });

      expect(director).toBeInTheDocument();
    });

    test("Then it shouldn't show a 'Sessions' title while the skeleton is being shown", () => {
      const expectedTitle = "Sessions";

      renderMovieDetailPage(true);

      const title = screen.queryByRole("heading", { name: expectedTitle });

      expect(title).not.toBeInTheDocument();
    });
    test("Then it should show the sessions' information", async () => {
      const expectedSessionInformation = "WEDNESDAY 15";

      renderMovieDetailPage(false);

      const sessionInformation = await screen.getByText(
        expectedSessionInformation,
      );

      expect(sessionInformation).toBeInTheDocument();
    });
  });
});

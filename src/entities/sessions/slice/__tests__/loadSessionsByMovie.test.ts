import { sessionsMock } from "../../mocks/sessionsMock";
import { SessionsState, SessionsStructure } from "../../types";
import { loadSessionsActionCreator, sessionsReducer } from "../sessionsSlice";

describe("Given a loadSessionsByMovie reducer", () => {
  describe("When it receives an empty sessions state and the action to load two sessions", () => {
    test("Then it should return a list with two sessions", () => {
      const currentEmptyState: SessionsStructure = {
        id: 0,
        movieId: 0,
        dates: [],
        price: 0,
      };

      const currentSessionsState: SessionsState = {
        sessionsData: currentEmptyState,
      };
      const loadSessions = loadSessionsActionCreator(sessionsMock[0]);

      const expectedNewSessionsState: SessionsState = {
        ...currentSessionsState,
        sessionsData: sessionsMock[0],
      };

      const newState: SessionsState = sessionsReducer(
        currentSessionsState,
        loadSessions,
      );

      expect(expectedNewSessionsState).toStrictEqual(newState);
    });
  });
});

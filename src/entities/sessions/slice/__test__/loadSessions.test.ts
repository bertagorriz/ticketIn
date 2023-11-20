import { sessionsMock } from "../../mocks/sessionsMock";
import { SessionsState, SessionsStructure } from "../../types";
import { loadSessionsActionCreator, sessionsReducer } from "../sessionsSlice";

describe("Given a loadSessions reducer", () => {
  describe("When it receives an empty sessions state and the action to load two sessions", () => {
    test("Then it should return a list with two sessions", () => {
      const currentEmptyState: SessionsStructure[] = [];

      const currentSessionsState: SessionsState = {
        sessionsData: currentEmptyState,
      };
      const loadSessions = loadSessionsActionCreator(sessionsMock);

      const expectedNewSessionsState: SessionsState = {
        ...currentSessionsState,
        sessionsData: sessionsMock,
      };

      const newState: SessionsState = sessionsReducer(
        currentSessionsState,
        loadSessions,
      );

      expect(expectedNewSessionsState).toStrictEqual(newState);
    });
  });
});

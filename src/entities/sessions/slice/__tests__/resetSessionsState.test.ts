import { sessionsMock } from "../../mocks/sessionsMock";
import { SessionsState, SessionsStructure } from "../../types";
import {
  resetSessionsStateActionCreator,
  sessionsReducer,
} from "../sessionsSlice";

describe("Given a resetSessionsState reducer", () => {
  describe("When it is called", () => {
    test("Then it should return an empty list of sessions", () => {
      const currentEmptyState: SessionsStructure[] = [];

      const currentSessionsState: SessionsState = {
        sessionsData: sessionsMock,
      };
      const resetSessionsState = resetSessionsStateActionCreator();

      const expectedNewSessionsState: SessionsState = {
        sessionsData: currentEmptyState,
      };

      const newState: SessionsState = sessionsReducer(
        currentSessionsState,
        resetSessionsState,
      );

      expect(expectedNewSessionsState).toStrictEqual(newState);
    });
  });
});

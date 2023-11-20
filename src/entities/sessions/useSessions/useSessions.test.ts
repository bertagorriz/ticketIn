import { renderHook } from "@testing-library/react";
import { sessionsMock } from "../mocks/sessionsMock";

import useSessions from "./useSessions";
import { wrapWithProviders } from "../../../utils/testUtils";
import { SessionsStructure } from "../types";
import { server } from "../../../mocks/moviesMocks/node";
import { errorHandlers } from "../../../mocks/moviesMocks/handlers";

describe("Given a useSessions function", () => {
  describe("When it calls the getSessions function", () => {
    test("Then it should return a list of two sessions", async () => {
      const sessionList: SessionsStructure[] = sessionsMock;

      const {
        result: {
          current: { getSessions },
        },
      } = renderHook(() => useSessions(), { wrapper: wrapWithProviders });

      const expectedSessionList = await getSessions();

      expect(expectedSessionList).toStrictEqual(sessionList);
    });
  });

  describe("When the getSessions function is called and an error occurs", () => {
    test("Then it should throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getSessions },
        },
      } = renderHook(() => useSessions(), { wrapper: wrapWithProviders });

      expect(getSessions()).rejects.toThrowError();
    });
  });
});

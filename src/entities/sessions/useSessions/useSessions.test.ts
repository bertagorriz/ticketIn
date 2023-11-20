import { renderHook } from "@testing-library/react";
import { sessionsMock } from "../mocks/sessionsMock";
import { SessionStructure } from "../types";
import useSessions from "./useSessions";
import { wrapWithProviders } from "../../../utils/testUtils";

describe("Given a getSessions function", () => {
  describe("When it is invoked", () => {
    test("Then it should return a list of two sessions", async () => {
      const sessionList: SessionStructure[] = sessionsMock;

      const {
        result: {
          current: { getSessions },
        },
      } = renderHook(() => useSessions(), { wrapper: wrapWithProviders });

      const expectedSessionList = await getSessions();

      expect(expectedSessionList).toStrictEqual(sessionList);
    });
  });
});

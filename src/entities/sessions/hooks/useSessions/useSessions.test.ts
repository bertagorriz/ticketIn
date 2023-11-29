import { renderHook } from "@testing-library/react";
import { sessionsMock } from "../../mocks/sessionsMock";
import useSessions from "./useSessions";
import { wrapWithProviders } from "../../../../utils/testUtils";
import { SessionsStructure } from "../../types";
import { server } from "../../../../mocks/node";
import { errorHandlers } from "../../../../mocks/handlers";
import AxiosSessionsClient from "../../services/AxiosSessionsClient";
import apiUrl from "../../../../utils/apiUrl/apiUrl";

describe("Given a useSessions function", () => {
  const movieId = "1";
  const sessionsClient = new AxiosSessionsClient(apiUrl);

  describe("When it calls the getSessionsByMovie function", () => {
    test("Then it should return a session information", async () => {
      const session: SessionsStructure = sessionsMock[0];

      const {
        result: {
          current: { getSessionsByMovie },
        },
      } = renderHook(() => useSessions(sessionsClient), {
        wrapper: wrapWithProviders,
      });

      const expectedSession = await getSessionsByMovie(movieId);

      expect(expectedSession).toStrictEqual(session);
    });
  });

  describe("When the getSessionsByMovie function is called and an error occurs", () => {
    test("Then it should throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getSessionsByMovie },
        },
      } = renderHook(() => useSessions(sessionsClient), {
        wrapper: wrapWithProviders,
      });

      expect(getSessionsByMovie(movieId)).rejects.toThrowError();
    });
  });
});

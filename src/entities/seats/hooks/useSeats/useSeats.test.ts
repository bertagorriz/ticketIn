import { renderHook } from "@testing-library/react";
import { seatsMock } from "../../mocks/seatsMock";
import { SeatsStructure } from "../../types";
import useSeats from "./useSeats";
import { wrapWithProviders } from "../../../../utils/testUtils";
import { server } from "../../../../mocks/node";
import { errorHandlers } from "../../../../mocks/handlers";

describe("Given a useSeats functions", () => {
  describe("When it calls the getSeatsBySession function", () => {
    test("Then it should return a seats information", async () => {
      const seatsInformation: SeatsStructure[] = [seatsMock];

      const {
        result: {
          current: { getSeatsBySession },
        },
      } = renderHook(() => useSeats(), { wrapper: wrapWithProviders });

      const expectedSeatsInformation = await getSeatsBySession(
        seatsMock.movieId,
        seatsMock.sessionId,
      );

      expect(expectedSeatsInformation).toStrictEqual(seatsInformation);
    });
  });

  describe("When the getSeatsBySession is called and an error occurs", () => {
    test("Then it should throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getSeatsBySession },
        },
      } = renderHook(() => useSeats(), { wrapper: wrapWithProviders });

      expect(
        getSeatsBySession(seatsMock.movieId, seatsMock.sessionId),
      ).rejects.toThrowError();
    });
  });
});

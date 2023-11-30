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
        seatsMock.movieId.toString(),
        seatsMock.sessionId.toString(),
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
        getSeatsBySession(
          seatsMock.movieId.toString(),
          seatsMock.sessionId.toString(),
        ),
      ).rejects.toThrowError();
    });
  });

  describe("When the updateSeat function is called with an id and the updated seats information", () => {
    test("Then it should return the updated seats information", async () => {
      const updatedSeats: SeatsStructure = seatsMock;

      const {
        result: {
          current: { updateSeat },
        },
      } = renderHook(() => useSeats(), { wrapper: wrapWithProviders });

      const expectedSeatsInformation = await updateSeat(
        seatsMock.movieId.toString(),
        seatsMock,
      );

      expect(expectedSeatsInformation).toStrictEqual(updatedSeats);
    });
  });

  describe("When the updateSeat function is called with an id and the updated seats information and an error occurs", () => {
    test("Then it should throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { updateSeat },
        },
      } = renderHook(() => useSeats(), { wrapper: wrapWithProviders });

      expect(
        updateSeat(seatsMock.movieId.toString(), seatsMock),
      ).rejects.toThrowError();
    });
  });
});

import { seatsMock } from "../../mocks/seatsMock";
import { SeatsState, SeatsStructure } from "../../types";
import { loadSeatsBySessionActionCreator, seatsReducer } from "../seatsSlice";

describe("Given a loadSeatsBySession reducer", () => {
  describe("When it receives an empty sessions state and the action to load the seats session data", () => {
    test("Then it should return the reserved seats of the session", () => {
      const currentEmptyState: SeatsStructure = {
        id: 0,
        sessionId: 0,
        movieId: 0,
        reserved: [],
      };

      const currentSeatsState: SeatsState = {
        seatsData: currentEmptyState,
      };

      const loadReservedSeats = loadSeatsBySessionActionCreator(seatsMock);

      const expectedNewSeatsState: SeatsState = {
        ...currentSeatsState,
        seatsData: seatsMock,
      };

      const newState: SeatsState = seatsReducer(
        currentSeatsState,
        loadReservedSeats,
      );

      expect(expectedNewSeatsState).toStrictEqual(newState);
    });
  });
});

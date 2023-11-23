import { seatsMock } from "../../mocks/seatsMock";
import { SeatsState } from "../../types";
import { seatsReducer, updateSelectedSeatsActionCreator } from "../seatsSlice";

describe("Given a loadSeatsBySession reducer", () => {
  describe("When it receives an empty sessions state and the action to load the seats session data", () => {
    test("Then it should return the reserved seats of the session", () => {
      const currentSeatsState: SeatsState = {
        seatsData: {
          id: 1,
          sessionId: 1,
          movieId: 1,
          reserved: [],
        },
      };

      const loadReservedSeats = updateSelectedSeatsActionCreator(
        seatsMock.reserved,
      );

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

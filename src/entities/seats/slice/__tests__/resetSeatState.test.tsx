import { seatsMock } from "../../mocks/seatsMock";
import { SeatsState } from "../../types";
import { resetSeatStateActionCreator, seatsReducer } from "../seatsSlice";

describe("Given a resetSeatState reducer", () => {
  describe("When it called", () => {
    test("Then it should return a reseted state", () => {
      const currentSeatState: SeatsState = {
        seatsData: seatsMock,
      };

      const expectedNewEmptyState: SeatsState = {
        seatsData: {
          id: 0,
          movieId: 0,
          sessionId: 0,
          reserved: [],
        },
      };

      const resetSeatStateSlice = resetSeatStateActionCreator();

      const newState: SeatsState = seatsReducer(
        currentSeatState,
        resetSeatStateSlice,
      );

      expect(expectedNewEmptyState).toStrictEqual(newState);
    });
  });
});

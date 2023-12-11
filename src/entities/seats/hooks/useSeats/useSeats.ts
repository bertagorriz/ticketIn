import { useCallback } from "react";
import { SeatsStructure } from "../../types";
import showToast from "../../../../toast/showToast";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../../ui/uiSlice";
import { useAppDispatch } from "../../../../store";
import SeatsClient from "../../service/types";

const useSeats = (seatsClient: SeatsClient) => {
  const dispatch = useAppDispatch();

  const getSeatsBySession = useCallback(
    async (movieId: string, sessionId: string): Promise<SeatsStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const seats = await seatsClient.getSeatsBySession(movieId, sessionId);
        dispatch(hideSkeletonActionCreator());

        return seats;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, can't load seats information now";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch, seatsClient],
  );

  const updateSeat = async (
    id: string,
    dataSeat: SeatsStructure,
  ): Promise<SeatsStructure> => {
    try {
      const updatedSeat = await seatsClient.updateSeat(id, dataSeat);

      return updatedSeat;
    } catch {
      const error = "Sorry, selected seats can't be reserved ";
      showToast(error, "error");
      throw error;
    }
  };

  return { getSeatsBySession, updateSeat };
};

export default useSeats;

import { useCallback } from "react";
import { SeatsStructure } from "../../types";
import path from "../../../../routers/paths/paths";
import axios from "axios";
import showToast from "../../../../toast/showToast";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../../ui/uiSlice";
import { useAppDispatch } from "../../../../store";

const apiUrl = import.meta.env.VITE_API_URL;

const useSeats = () => {
  const dispatch = useAppDispatch();

  const getSeatsBySession = useCallback(
    async (movieId: string, sessionId: string): Promise<SeatsStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const { data: seats } = await axios.get<SeatsStructure>(
          `${apiUrl}${path.seats}?movieId=${movieId}&sessionId=${sessionId}`,
        );
        dispatch(hideSkeletonActionCreator());

        return seats;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, can't load seats information now";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch],
  );

  const updateSeat = async (
    id: string,
    dataSeat: SeatsStructure,
  ): Promise<SeatsStructure> => {
    try {
      const {
        data: { updatedSeat },
      } = await axios.put<{ updatedSeat: SeatsStructure }>(
        `${apiUrl}${path.seats}/${id}`,
        dataSeat,
      );

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

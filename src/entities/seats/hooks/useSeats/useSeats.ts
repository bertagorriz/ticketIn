import { useCallback } from "react";
import { SeatsStructure } from "../../types";
import path from "../../../../routers/paths/paths";
import axios from "axios";
import showToast from "../../../../Toast/showToast";

const apiUrl = import.meta.env.VITE_API_URL;

const useSeats = () => {
  const getSeatsBySession = useCallback(
    async (id: string): Promise<SeatsStructure> => {
      try {
        const { data: seats } = await axios.get<SeatsStructure>(
          `${apiUrl}${path.seats}/${id}`,
        );
        return seats;
      } catch {
        const error = "Sorry, can't load seats information now";
        showToast(error, "error");
        throw error;
      }
    },
    [],
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

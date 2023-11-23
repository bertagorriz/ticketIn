import { useCallback } from "react";
import { SeatsStructure } from "../../types";
import path from "../../../../routers/paths/paths";
import axios from "axios";
import showToast from "../../../../toast/showToast";

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
  return { getSeatsBySession };
};

export default useSeats;

import { useCallback } from "react";
import axios from "axios";
import path from "../../../../routers/paths/paths";
import showToast from "../../../../Toast/showToast";
import { SessionsStructure } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const useSessions = () => {
  const getSessionsByMovie = useCallback(
    async (id: string): Promise<SessionsStructure> => {
      try {
        const { data: session } = await axios.get<SessionsStructure>(
          `${apiUrl}${path.sessions}/${id}`,
        );

        return session;
      } catch {
        const error = "Sorry, can't load sessions information now";
        showToast(error, "error");
        throw error;
      }
    },
    [],
  );
  return { getSessionsByMovie };
};

export default useSessions;

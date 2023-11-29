import { useCallback } from "react";
import { SessionsStructure } from "../../types";
import showToast from "../../../../toast/showToast";
import SessionsClient from "../../services/types";

const useSessions = (sessionsClient: SessionsClient) => {
  const getSessionsByMovie = useCallback(
    async (movieId: string): Promise<SessionsStructure[]> => {
      try {
        const session = await sessionsClient.getSessionsByMovie(movieId);

        return session;
      } catch {
        const error = "Sorry, can't load sessions information now";
        showToast(error, "error");
        throw error;
      }
    },
    [sessionsClient],
  );
  return { getSessionsByMovie };
};

export default useSessions;

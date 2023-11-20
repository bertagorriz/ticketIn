import { useCallback } from "react";
import { SessionStructure } from "../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useSessions = () => {
  const getSessions = useCallback(async (): Promise<SessionStructure[]> => {
    const { data: sessions } = await axios.get<SessionStructure[]>(
      `${apiUrl}/sessions`,
    );
    return sessions;
  }, []);
  return { getSessions };
};

export default useSessions;

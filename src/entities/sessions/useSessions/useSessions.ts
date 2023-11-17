import { useCallback } from "react";
import { SessionStructure } from "../types";
import path from "../../../routers/paths/paths";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useSessions = () => {
  const getSessions = useCallback(async (): Promise<SessionStructure[]> => {
    const { data: sessions } = await axios.get<SessionStructure[]>(
      `${apiUrl}${path.sessions}`,
    );
    return sessions;
  }, []);
  return { getSessions };
};

export default useSessions;

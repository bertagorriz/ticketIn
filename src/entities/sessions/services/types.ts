import { SessionsStructure } from "../types";

interface SessionsClient {
  getSessionsByMovie(movieId: string): Promise<SessionsStructure[]>;
}

export default SessionsClient;

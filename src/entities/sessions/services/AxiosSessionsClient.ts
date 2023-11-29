import axios from "axios";
import { SessionsStructure } from "../types";
import SessionsClient from "./types";
import paths from "../../../routers/paths/paths";

class AxiosSessionsClient implements SessionsClient {
  constructor(private apiUrl: string) {}

  async getSessionsByMovie(movieId: string): Promise<SessionsStructure[]> {
    const { data: session } = await axios.get<SessionsStructure[]>(
      `${this.apiUrl}${paths.sessions}?movieId=${movieId}`,
    );

    return session;
  }
}

export default AxiosSessionsClient;

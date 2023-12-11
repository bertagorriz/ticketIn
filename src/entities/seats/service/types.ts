import { SeatsStructure } from "../types";

interface SeatsClient {
  getSeatsBySession(
    movieId: string,
    sessionId: string,
  ): Promise<SeatsStructure>;
  updateSeat(id: string, dataSeat: SeatsStructure): Promise<SeatsStructure>;
}

export default SeatsClient;

import axios from "axios";
import { SeatsStructure } from "../types";
import SeatsClient from "./types";
import paths from "../../../routers/paths/paths";

class AxiosSeatsClient implements SeatsClient {
  constructor(private apiUrl: string) {}

  async getSeatsBySession(
    movieId: string,
    sessionId: string,
  ): Promise<SeatsStructure> {
    const {
      data: [seats],
    } = await axios.get<SeatsStructure[]>(
      `${this.apiUrl}${paths.seats}?movieId=${movieId}&sessionId=${sessionId}`,
    );

    return seats;
  }

  async updateSeat(
    id: string,
    dataSeat: SeatsStructure,
  ): Promise<SeatsStructure> {
    const { data: updatedSeat } = await axios.put<SeatsStructure>(
      `${this.apiUrl}${paths.seats}/${id}`,
      dataSeat,
    );

    return updatedSeat;
  }
}

export default AxiosSeatsClient;

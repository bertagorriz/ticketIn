import axios from "axios";
import { MovieStructure } from "../types";
import MoviesClient from "./types";
import paths from "../../../routers/paths/paths";

class AxiosMoviesClient implements MoviesClient {
  constructor(private apiUrl: string) {}

  async getMovies(): Promise<MovieStructure[]> {
    const { data: movies } = await axios.get<MovieStructure[]>(
      `${this.apiUrl}${paths.movies}`,
    );
    return movies;
  }

  async getOneMovie(id: string): Promise<MovieStructure> {
    const { data: movie } = await axios.get<MovieStructure>(
      `${this.apiUrl}${paths.movies}/${id}`,
    );
    return movie;
  }
}

export default AxiosMoviesClient;

import { MovieStructure } from "../types";

interface MoviesClient {
  getMovies(): Promise<MovieStructure[]>;
}

export default MoviesClient;

import { MovieStructure } from "../types";

interface MoviesClient {
  getMovies(): Promise<MovieStructure[]>;
  getOneMovie(id: string): Promise<MovieStructure>;
}
export default MoviesClient;

import { MovieStructure } from "../types";

interface MoviesClient {
  getMovies(): Promise<MovieStructure[]>;
  getOneMovie(movieSlug: string): Promise<MovieStructure>;
}
export default MoviesClient;

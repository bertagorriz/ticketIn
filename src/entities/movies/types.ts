export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  posterUrl: string[];
  synopsis: string;
  runtime: string;
  genre: string;
}

export interface MoviesState {
  moviesData: MovieStructure[];
  selectedMovie: MovieStructure;
}

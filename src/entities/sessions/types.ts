export interface SessionsStructure {
  id: number;
  movieId: number;
  dates: string;
  price: number;
}

export interface SessionsState {
  sessionsData: SessionsStructure[];
}

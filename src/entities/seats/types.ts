export interface SeatsStructure {
  id: number;
  movieId: number;
  sessionId: number;
  reserved: string[];
}

export interface SeatsState {
  seatsData: SeatsStructure;
}

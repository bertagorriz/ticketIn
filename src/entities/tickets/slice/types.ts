export interface TicketStructure {
  id: number;
  movieId: number;
  sessionId: number;
  seats: string[];
  url: string;
  price: number;
}

export interface TicketState {
  ticketsData: TicketStructure[];
  selectedTicket: TicketStructure;
}

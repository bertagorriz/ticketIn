import { TicketStructure } from "../types";

interface TicketsClient {
  getTickets(): Promise<TicketStructure[]>;
  getOneTicket(id: string): Promise<TicketStructure>;
  createTickets(ticket: TicketStructure): Promise<TicketStructure>;
}
export default TicketsClient;

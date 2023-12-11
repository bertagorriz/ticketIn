import { TicketStructure } from "../types";

interface TicketsClient {
  getTickets(): Promise<TicketStructure[]>;
  getOneTicket(id: string): Promise<TicketStructure>;
  createTicket(ticket: TicketStructure): Promise<TicketStructure>;
}
export default TicketsClient;

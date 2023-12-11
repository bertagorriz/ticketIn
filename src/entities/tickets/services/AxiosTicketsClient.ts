import axios from "axios";
import paths from "../../../routers/paths/paths";
import { TicketStructure } from "../types";
import TicketsClient from "./types";

class AxiosTicketsClient implements TicketsClient {
  constructor(private apiUrl: string) {}

  async getTickets(): Promise<TicketStructure[]> {
    const { data: tickets } = await axios.get<TicketStructure[]>(
      `${this.apiUrl}${paths.tickets}`,
    );
    return tickets;
  }

  async getOneTicket(id: string): Promise<TicketStructure> {
    const { data: ticket } = await axios.get<TicketStructure>(
      `${this.apiUrl}${paths.tickets}/${id}`,
    );
    return ticket;
  }

  async createTicket(ticketData: TicketStructure): Promise<TicketStructure> {
    const { data: ticket } = await axios.post<TicketStructure>(
      `${this.apiUrl}${paths.tickets}`,
      ticketData,
    );
    return ticket;
  }
}

export default AxiosTicketsClient;

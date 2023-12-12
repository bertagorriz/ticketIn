import { useParams } from "react-router-dom";
import convertDateTime from "../../convertDates/convertDates";
import { useAppDispatch, useAppSelector } from "../../store";
import SeatsInfo from "../SeatsInfo/SeatsInfo";
import SeatsList from "../SeatsList/SeatsList";
import SeatsContainerStyled from "./SeatsContainerStyled";
import showToast from "../../toast/showToast";
import { useEffect, useMemo, useState } from "react";
import { SessionsStructure } from "../../entities/sessions/types";
import Button from "../Button/Button";
import { TicketStructure } from "../../entities/tickets/types";
import useTickets from "../../entities/tickets/hooks/useTickets";
import AxiosTicketsClient from "../../entities/tickets/services/AxiosTicketsClient";
import apiUrl from "../../utils/apiUrl/apiUrl";
import { addTicketActionCreator } from "../../entities/tickets/slice/ticketsSlice";
import { showModalActionCreator } from "../../entities/ui/uiSlice";

const SeatsContainer = (): React.ReactElement => {
  const ticketsClient = useMemo(() => new AxiosTicketsClient(apiUrl), []);
  const dispatch = useAppDispatch();
  const { sessionsData } = useAppSelector((store) => store.sessions);
  const { selectedMovie } = useAppSelector((store) => store.movies);
  const { reserved: unavailableSeats } = useAppSelector(
    (store) => store.seats.seatsData,
  );
  const { seats, detail, sessionId } = useParams();
  const [selectedSession, setSelectedSession] = useState<
    SessionsStructure | undefined | null
  >(null);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [reservedSeats, setReservedSeats] = useState([] as string[]);
  const { createTicket } = useTickets(ticketsClient);

  const getTotalPrice = () => {
    const sumTotalPrice = () => {
      if (selectedSession) {
        setCurrentPrice(currentPrice + selectedSession.price);
      }
    };
    const restTotalPrice = () => {
      if (selectedSession) {
        setCurrentPrice(currentPrice - selectedSession.price);
      }
    };

    return { sumTotalPrice, restTotalPrice };
  };

  const getReservedInformationSeats = (seats: string[]) => {
    const getSeatsInformation = seats.map((seat) => {
      if (seats.length === 1 || seat === seats[seats.length - 1]) {
        return `R${seat[1]} - S${seat[3]}`;
      }
      return `R${seat[1]} - S${seat[3]} | `;
    });

    return getSeatsInformation;
  };

  const doesSelectedSessionExist = (
    selectedSession: SessionsStructure | undefined | null,
  ) => typeof selectedSession === "undefined";

  useEffect(() => {
    if (!sessionId) {
      const errorMessage = "Can't load selected session!";
      showToast(errorMessage, "error");
      return;
    }

    setSelectedSession(
      sessionsData.find((session) => session.id === +sessionId),
    );

    if (doesSelectedSessionExist(selectedSession) || !unavailableSeats) {
      return;
    }
  }, [selectedSession, sessionId, sessionsData, unavailableSeats]);

  const handleOnClick = async (ticketData: TicketStructure) => {
    const newTicket = await createTicket(ticketData);

    if (newTicket) {
      dispatch(addTicketActionCreator(newTicket));
      dispatch(
        showModalActionCreator({
          isVisible: true,
          url: `https://ticketin.netlify.app${seats}${detail}${sessionId}`,
        }),
      );
    }
  };

  return (
    <SeatsContainerStyled>
      {selectedSession && (
        <>
          <SeatsList
            restTotalPrice={getTotalPrice().restTotalPrice}
            sumTotalPrice={getTotalPrice().sumTotalPrice}
            reservedSeats={reservedSeats}
            setReservedSeats={setReservedSeats}
            unavailableSeats={unavailableSeats}
          />
          <SeatsInfo
            movie={selectedMovie.title}
            date={convertDateTime(selectedSession.dates)}
            seats={getReservedInformationSeats(reservedSeats)}
            price={currentPrice}
          />{" "}
          <Button
            classname="buy"
            text="BUY"
            ariaLabel="buy button"
            actionOnClick={() => handleOnClick}
          />
        </>
      )}
    </SeatsContainerStyled>
  );
};

export default SeatsContainer;

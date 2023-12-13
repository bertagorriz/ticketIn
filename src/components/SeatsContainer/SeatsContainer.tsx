import { useParams } from "react-router-dom";
import convertDateTime from "../../convertDates/convertDates";
import { useAppSelector } from "../../store";
import SeatsInfo from "../SeatsInfo/SeatsInfo";
import SeatsList from "../SeatsList/SeatsList";
import SeatsContainerStyled from "./SeatsContainerStyled";
import showToast from "../../toast/showToast";
import { useEffect, useState } from "react";
import { SessionsStructure } from "../../entities/sessions/types";
import { TicketStructure } from "../../entities/tickets/types";
import paths from "../../routers/paths/paths";

interface SeatsContainerProps {
  onClick: (ticket: TicketStructure) => void;
}

const SeatsContainer = ({
  onClick,
}: SeatsContainerProps): React.ReactElement => {
  const { sessionsData } = useAppSelector((store) => store.sessions);
  const { selectedMovie } = useAppSelector((store) => store.movies);
  const { reserved: unavailableSeats } = useAppSelector(
    (store) => store.seats.seatsData,
  );
  const { ticketsData } = useAppSelector((store) => store.ticket);
  const { sessionId } = useParams();
  const [selectedSession, setSelectedSession] = useState<
    SessionsStructure | undefined | null
  >(null);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [reservedSeats, setReservedSeats] = useState([] as string[]);

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

  const handleOnClick = (): void => {
    const uniqueId = ticketsData.length + 1;

    onClick({
      id: uniqueId,
      movieId: selectedMovie.id,
      sessionId: selectedSession?.id as number,
      seats: [...reservedSeats],
      url: `https://ticketin-api.onrender.com${paths.tickets}/${uniqueId}`,
      price: currentPrice,
    });
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
            handleOnClick={handleOnClick}
            isSelected={!reservedSeats.length}
          />
        </>
      )}
    </SeatsContainerStyled>
  );
};

export default SeatsContainer;

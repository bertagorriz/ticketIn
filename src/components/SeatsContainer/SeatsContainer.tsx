import { useParams } from "react-router-dom";
import convertDateTime from "../../convertDates/convertDates";
import { useAppSelector } from "../../store";
import SeatsInfo from "../SeatsInfo/SeatsInfo";
import SeatsList from "../SeatsList/SeatsList";
import SeatsContainerStyled from "./SeatsContainerStyled";
import showToast from "../../toast/showToast";
import { useEffect, useState } from "react";
import { SessionsStructure } from "../../entities/sessions/types";

const SeatsContainer = (): React.ReactElement => {
  const { sessionsData } = useAppSelector((store) => store.sessions);
  const { selectedMovie } = useAppSelector((store) => store.movies);
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

    if (doesSelectedSessionExist(selectedSession)) {
      return;
    }
  }, [selectedSession, sessionId, sessionsData]);

  return (
    <SeatsContainerStyled>
      {selectedSession && (
        <>
          <SeatsList
            restTotalPrice={getTotalPrice().restTotalPrice}
            sumTotalPrice={getTotalPrice().sumTotalPrice}
            reservedSeats={reservedSeats}
            setReservedSeats={setReservedSeats}
          />
          <SeatsInfo
            movie={selectedMovie.title}
            date={convertDateTime(selectedSession.dates)}
            seats={getReservedInformationSeats(reservedSeats)}
            price={currentPrice}
          />{" "}
        </>
      )}
    </SeatsContainerStyled>
  );
};

export default SeatsContainer;

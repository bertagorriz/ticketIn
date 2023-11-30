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
          <SeatsList />
          <SeatsInfo
            movie={selectedMovie.title}
            date={convertDateTime(selectedSession.dates)}
            row="1"
            seats={["2", ", ", "3"]}
            price={9}
          />{" "}
        </>
      )}
    </SeatsContainerStyled>
  );
};

export default SeatsContainer;

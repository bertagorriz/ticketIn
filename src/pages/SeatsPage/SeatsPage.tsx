import { useNavigate, useParams } from "react-router-dom";
import SeatsContainer from "../../components/SeatsContainer/SeatsContainer";
import SeatsPageStyled from "./SeatsPageStyled";
import { useEffect, useMemo } from "react";
import useSeats from "../../entities/seats/hooks/useSeats/useSeats";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadSeatsBySessionActionCreator,
  resetSeatStateActionCreator,
} from "../../entities/seats/slice/seatsSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import {
  loadMovieByIdActionCreator,
  resetMoviesStoreActionCreator,
} from "../../entities/movies/slice/moviesSlice";
import AxiosMoviesClient from "../../entities/movies/services/AxiosMoviesClient";
import apiUrl from "../../utils/apiUrl/apiUrl";
import AxiosSessionsClient from "../../entities/sessions/services/AxiosSessionsClient";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import {
  loadSessionsActionCreator,
  resetSessionsStateActionCreator,
} from "../../entities/sessions/slice/sessionsSlice";
import AxiosSeatsClient from "../../entities/seats/service/AxiosSeatsClient";
import paths from "../../routers/paths/paths";
import Modal from "../../components/Modal/Modal";
import AxiosTicketsClient from "../../entities/tickets/services/AxiosTicketsClient";
import useTickets from "../../entities/tickets/hooks/useTickets";
import {
  addTicketActionCreator,
  loadTicketsActionCreator,
} from "../../entities/tickets/slice/ticketsSlice";
import { TicketStructure } from "../../entities/tickets/types";
import {
  hideModalActionCreator,
  showModalActionCreator,
} from "../../entities/ui/uiSlice";

const SeatsPage = (): React.ReactElement => {
  const moviesClient = useMemo(() => new AxiosMoviesClient(apiUrl), []);
  const sessionsClient = useMemo(() => new AxiosSessionsClient(apiUrl), []);
  const seatsClient = useMemo(() => new AxiosSeatsClient(apiUrl), []);
  const ticketsClient = useMemo(() => new AxiosTicketsClient(apiUrl), []);

  const { movieSlug, sessionId } = useParams();
  const navigate = useNavigate();
  const { getSeatsBySession, updateSeat } = useSeats(seatsClient);
  const { getOneMovie } = useMovies(moviesClient);
  const { getSessionsByMovie } = useSessions(sessionsClient);
  const { createTicket, getTickets } = useTickets(ticketsClient);
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((store) => store.movies.selectedMovie);
  const { seatsData } = useAppSelector((store) => store.seats);
  const {
    modalState: { isVisible, url },
  } = useAppSelector((store) => store.ui);

  const handleOnClick = async (ticket: TicketStructure): Promise<void> => {
    await createTicket(ticket);
    await updateSeat(seatsData.id.toString(), {
      ...seatsData,
      reserved: [...seatsData.reserved, ...ticket.seats],
    });

    dispatch(addTicketActionCreator(ticket));
    dispatch(showModalActionCreator({ isVisible: true, url: ticket.url }));
  };

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (movieSlug && sessionId) {
        const selectedMovie = await getOneMovie(movieSlug);
        const tickets = await getTickets();

        dispatch(loadMovieByIdActionCreator(selectedMovie));
        dispatch(loadTicketsActionCreator(tickets));
      }
    })();

    return () => {
      dispatch(resetSeatStateActionCreator());
      dispatch(resetMoviesStoreActionCreator());
      dispatch(resetSessionsStateActionCreator());
      dispatch(hideModalActionCreator());
    };
  }, [
    dispatch,
    getSeatsBySession,
    getOneMovie,
    movieSlug,
    sessionId,
    getSessionsByMovie,
    getTickets,
  ]);

  useEffect(() => {
    (async () => {
      if (id && sessionId) {
        const selectedSessions = await getSessionsByMovie(id.toString());
        const selectedSeatsSession = await getSeatsBySession(
          id.toString(),
          sessionId,
        );

        if (!selectedSeatsSession) {
          navigate(paths.errorPage);
          return;
        }

        dispatch(loadSessionsActionCreator(selectedSessions));
        dispatch(loadSeatsBySessionActionCreator(selectedSeatsSession));
      }
    })();
  }, [
    dispatch,
    getSeatsBySession,
    getSessionsByMovie,
    id,
    navigate,
    sessionId,
  ]);

  return (
    <>
      {isVisible && <Modal url={url} />}
      <SeatsPageStyled>
        <h1 className="title">Choose your seats</h1>
        <SeatsContainer onClick={handleOnClick} />
      </SeatsPageStyled>
    </>
  );
};

export default SeatsPage;

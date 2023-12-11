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
import { loadMovieByIdActionCreator } from "../../entities/movies/slice/moviesSlice";
import AxiosMoviesClient from "../../entities/movies/services/AxiosMoviesClient";
import apiUrl from "../../utils/apiUrl/apiUrl";
import AxiosSessionsClient from "../../entities/sessions/services/AxiosSessionsClient";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import { loadSessionsActionCreator } from "../../entities/sessions/slice/sessionsSlice";
import paths from "../../routers/paths/paths";

const SeatsPage = (): React.ReactElement => {
  const moviesClient = useMemo(() => new AxiosMoviesClient(apiUrl), []);
  const sessionsClient = useMemo(() => new AxiosSessionsClient(apiUrl), []);

  const { movieId, sessionId } = useParams();
  const navigate = useNavigate();
  const { getSeatsBySession } = useSeats();
  const { getOneMovie } = useMovies(moviesClient);
  const { getSessionsByMovie } = useSessions(sessionsClient);
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((store) => store.movies.selectedMovie);

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (movieId && sessionId) {
        const selectedMovie = await getOneMovie(movieId);

        dispatch(loadMovieByIdActionCreator(selectedMovie));
      }
    })();

    return () => {
      dispatch(resetSeatStateActionCreator());
    };
  }, [
    dispatch,
    getSeatsBySession,
    getOneMovie,
    movieId,
    sessionId,
    getSessionsByMovie,
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
    <SeatsPageStyled>
      <h1 className="title">Choose your seats</h1>
      <SeatsContainer />
    </SeatsPageStyled>
  );
};

export default SeatsPage;

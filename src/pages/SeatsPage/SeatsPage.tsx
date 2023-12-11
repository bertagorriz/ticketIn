import { useParams } from "react-router-dom";
import SeatsContainer from "../../components/SeatsContainer/SeatsContainer";
import SeatsPageStyled from "./SeatsPageStyled";
import { useEffect, useMemo } from "react";
import useSeats from "../../entities/seats/hooks/useSeats/useSeats";
import { useAppDispatch } from "../../store";
import { loadSeatsBySessionActionCreator } from "../../entities/seats/slice/seatsSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import { loadMovieByIdActionCreator } from "../../entities/movies/slice/moviesSlice";
import AxiosMoviesClient from "../../entities/movies/services/AxiosMoviesClient";
import apiUrl from "../../utils/apiUrl/apiUrl";
import AxiosSessionsClient from "../../entities/sessions/services/AxiosSessionsClient";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import { loadSessionsActionCreator } from "../../entities/sessions/slice/sessionsSlice";
import AxiosSeatsClient from "../../entities/seats/service/AxiosSeatsClient";

const SeatsPage = (): React.ReactElement => {
  const moviesClient = useMemo(() => new AxiosMoviesClient(apiUrl), []);
  const sessionsClient = useMemo(() => new AxiosSessionsClient(apiUrl), []);
  const seatsClient = useMemo(() => new AxiosSeatsClient(apiUrl), []);

  const { movieId, sessionId } = useParams();
  const { getSeatsBySession } = useSeats(seatsClient);
  const { getOneMovie } = useMovies(moviesClient);
  const { getSessionsByMovie } = useSessions(sessionsClient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (movieId && sessionId) {
        const selectedSeatsSession = await getSeatsBySession(
          movieId,
          sessionId,
        );
        const selectedSessions = await getSessionsByMovie(movieId);
        const selectedMovie = await getOneMovie(movieId);

        dispatch(loadSessionsActionCreator(selectedSessions));
        dispatch(loadMovieByIdActionCreator(selectedMovie));
        dispatch(loadSeatsBySessionActionCreator(selectedSeatsSession));
      }
    })();
  }, [
    dispatch,
    getSeatsBySession,
    getOneMovie,
    movieId,
    sessionId,
    getSessionsByMovie,
  ]);

  return (
    <SeatsPageStyled>
      <h1 className="title">Choose your seats</h1>
      <SeatsContainer />
    </SeatsPageStyled>
  );
};

export default SeatsPage;

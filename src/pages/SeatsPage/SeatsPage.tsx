import { useParams } from "react-router-dom";
import SeatsContainer from "../../components/SeatsContainer/SeatsContainer";
import SeatsPageStyled from "./SeatsPageStyled";
import { useEffect } from "react";
import useSeats from "../../entities/seats/hooks/useSeats/useSeats";
import { useAppDispatch } from "../../store";
import { loadSeatsBySessionActionCreator } from "../../entities/seats/slice/seatsSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import { loadMovieByIdActionCreator } from "../../entities/movies/slice/moviesSlice";

const SeatsPage = (): React.ReactElement => {
  const { movieId, sessionId } = useParams();
  const { getSeatsBySession } = useSeats();
  const { getOneMovie } = useMovies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (movieId && sessionId) {
        const selectedSession = await getSeatsBySession(movieId, sessionId);
        const selectedMovie = await getOneMovie(movieId);

        dispatch(loadSeatsBySessionActionCreator(selectedSession));
        dispatch(loadMovieByIdActionCreator(selectedMovie));
      }
    })();
  }, [dispatch, getSeatsBySession, getOneMovie, movieId, sessionId]);

  return (
    <SeatsPageStyled>
      <h1 className="title">Choose your seats</h1>
      <SeatsContainer />
    </SeatsPageStyled>
  );
};

export default SeatsPage;

import { useEffect } from "react";
import Button from "../../components/Button/Button";
import MovieDetailSkeleton from "../../components/Loaders/MovieDetailSkeleton/MovieDetailSkeleton";
import { useAppDispatch, useAppSelector } from "../../store";
import MovieDetailPageStyled from "./MovieDetailPageStyled";
import {
  loadMovieByIdActionCreator,
  resetStateStoreActionCreator,
} from "../../entities/movies/slice/moviesSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import { useNavigate, useParams } from "react-router-dom";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import { loadSessionsActionCreator } from "../../entities/sessions/slice/sessionsSlice";
import convertDateTime from "../../convertDates/convertDates";
import path from "../../routers/paths/paths";

const MovieDetailPage = (): React.ReactElement => {
  const { isLoading } = useAppSelector((store) => store.ui);
  const { id } = useParams();
  const { getOneMovie } = useMovies();
  const { getSessionsByMovie } = useSessions();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((store) => store.movies.selectedMovie);
  const sessions = useAppSelector((store) => store.sessions.sessionsData.dates);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (id) {
        const selectedMovie = await getOneMovie(id);
        const sessions = await getSessionsByMovie(id);

        if (selectedMovie) {
          dispatch(loadMovieByIdActionCreator(selectedMovie));
          dispatch(loadSessionsActionCreator(sessions));
        }
      }
    })();

    return () => {
      dispatch(resetStateStoreActionCreator());
    };
  }, [dispatch, getOneMovie, id, getSessionsByMovie]);

  const handleOnSession = (movieId: number, sessionId: number) => () => {
    navigate(`${path.seats}/${movieId}/${sessionId}`);
  };

  return (
    <MovieDetailPageStyled>
      {isLoading ? (
        <MovieDetailSkeleton />
      ) : (
        <>
          <div>
            <img
              className="movie-poster"
              src={movie.posterUrl[0]}
              alt="movie poster"
              width={320}
              height={467}
            />
          </div>
          <section className="movie">
            <div className="movie-info">
              <div>
                <h1 className="movie-info__title">{movie.title}</h1>
                <h2 className="movie-info__director">{movie.director}</h2>
              </div>
              <ul>
                <li className="movie-info__runtime">
                  Runtime: {movie.runtime}
                </li>
                <li className="movie-info__genre">Genre: {movie.genre}</li>
              </ul>
              <p className="movie-info__synopsis">{movie.synopsis}</p>
            </div>
            <div className="movie-sessions">
              <h2 className="movie-sessions__title">Sessions</h2>
              <ul>
                {sessions.map((session, position) => (
                  <li className="movie-sessions__info" key={position}>
                    <span>
                      {`${convertDateTime(session)[1].toUpperCase()} ${
                        convertDateTime(session)[2]
                      }`}
                    </span>
                    <Button
                      classname="movie-sessions__button"
                      text={convertDateTime(session)[0]}
                      ariaLabel="session button"
                      title="session button"
                      actionOnClick={handleOnSession(movie.id, position + 1)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </MovieDetailPageStyled>
  );
};

export default MovieDetailPage;

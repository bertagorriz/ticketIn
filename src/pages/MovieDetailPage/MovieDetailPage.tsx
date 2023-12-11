import { useEffect, useMemo } from "react";
import Button from "../../components/Button/Button";
import MovieDetailSkeleton from "../../components/Loaders/MovieDetailSkeleton/MovieDetailSkeleton";
import { useAppDispatch, useAppSelector } from "../../store";
import MovieDetailPageStyled from "./MovieDetailPageStyled";
import {
  loadMovieByIdActionCreator,
  resetMoviesStoreActionCreator,
} from "../../entities/movies/slice/moviesSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import { useNavigate, useParams } from "react-router-dom";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import { loadSessionsActionCreator } from "../../entities/sessions/slice/sessionsSlice";
import convertDateTime from "../../convertDates/convertDates";
import paths from "../../routers/paths/paths";
import AxiosSessionsClient from "../../entities/sessions/services/AxiosSessionsClient";
import apiUrl from "../../utils/apiUrl/apiUrl";
import AxiosMoviesClient from "../../entities/movies/services/AxiosMoviesClient";

const MovieDetailPage = (): React.ReactElement => {
  const sessionsClient = useMemo(() => new AxiosSessionsClient(apiUrl), []);
  const moviesClient = useMemo(() => new AxiosMoviesClient(apiUrl), []);

  const { isLoading } = useAppSelector((store) => store.ui);
  const { movieSlug } = useParams();
  const { getOneMovie } = useMovies(moviesClient);
  const { getSessionsByMovie } = useSessions(sessionsClient);
  const dispatch = useAppDispatch();
  const movie = useAppSelector((store) => store.movies.selectedMovie);
  const movieId = useAppSelector((store) => store.movies.selectedMovie.id);
  const sessions = useAppSelector((store) => store.sessions.sessionsData);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      if (movieSlug) {
        const selectedMovie = await getOneMovie(movieSlug);

        if (selectedMovie) {
          dispatch(loadMovieByIdActionCreator(selectedMovie));
        }
      }
    })();

    return () => {
      dispatch(resetMoviesStoreActionCreator());
    };
  }, [dispatch, getOneMovie, getSessionsByMovie, movieSlug]);

  useEffect(() => {
    (async () => {
      if (movieId) {
        const sessions = await getSessionsByMovie(movieId.toString());

        dispatch(loadSessionsActionCreator(sessions));
      }
    })();
  }, [dispatch, getSessionsByMovie, movieId]);

  const handleOnSession = (movieSlug: string, sessionId: number) => () => {
    navigate(`${paths.seats}/${movieSlug}/${sessionId}`);
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
                      {`${convertDateTime(
                        session.dates,
                      ).weekDay.toUpperCase()} ${
                        convertDateTime(session.dates).date
                      }`}
                    </span>
                    <Button
                      classname="movie-sessions__button"
                      text={convertDateTime(session.dates).hour}
                      ariaLabel="session button"
                      title="session button"
                      actionOnClick={handleOnSession(movie.slug, session.id)}
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

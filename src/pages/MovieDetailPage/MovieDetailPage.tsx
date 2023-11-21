import { useEffect } from "react";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store";
import MovieDetailPageStyled from "./MovieDetailPageStyled";
import { loadMovieByIdActionCreator } from "../../entities/movies/slice/moviesSlice";
import useMovies from "../../entities/movies/hooks/useMovies";
import { useParams } from "react-router-dom";
import useSessions from "../../entities/sessions/hooks/useSessions/useSessions";
import { loadSessionsActionCreator } from "../../entities/sessions/slice/sessionsSlice";

const MovieDetailPage = (): React.ReactElement => {
  const { id } = useParams();
  const { getOneMovie } = useMovies();
  const { getSessionsByMovie } = useSessions();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((store) => store.movies.selectedMovie);
  const sessions = useAppSelector((store) => store.sessions.sessionsData.dates);

  scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      if (id) {
        const selectedMovie = await getOneMovie(id);
        const sessions = await getSessionsByMovie(id);

        if (selectedMovie) {
          dispatch(loadMovieByIdActionCreator(selectedMovie));
          dispatch(loadSessionsActionCreator(sessions));
        }
      }
    })();
  }, [dispatch, getOneMovie, id, getSessionsByMovie]);

  return (
    <MovieDetailPageStyled>
      <img
        className="movie-poster"
        src={movie.posterUrl[0]}
        alt=""
        width={320}
        height={467}
      />
      <section className="movie">
        <div className="movie-info">
          <div>
            <h1 className="movie-info__title">{movie.title}</h1>
            <h2 className="movie-info__director">{movie.director}</h2>
          </div>
          <ul>
            <li className="movie-info__runtime">Runtime: {movie.runtime}</li>
            <li className="movie-info__genre">Genre: {movie.genre}</li>
          </ul>
          <p className="movie-info__synopsis">{movie.synopsis}</p>
        </div>
        <div className="movie-sessions">
          <h2 className="movie-sessions__title">Sessions</h2>
          <ul>
            {sessions.map((session, position) => (
              <li className="movie-sessions__info" key={position}>
                <span>{session}</span>
                <Button
                  classname="movie-sessions__button"
                  text="18:30"
                  ariaLabel="session button"
                  title="session button"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MovieDetailPageStyled>
  );
};

export default MovieDetailPage;

import Button from "../../components/Button/Button";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";
import MovieDetailPageStyled from "./MovieDetailPageStyled";

const MovieDetailPage = (): React.ReactElement => {
  const movie = moviesMock[0];

  return (
    <MovieDetailPageStyled>
      <img
        className="movie-poster"
        src="https://i.ibb.co/FDRMDLQ/barbie-big.webp"
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
          <span>DATE</span>
          <Button
            classname="movie-sessions__button"
            text="18:30"
            ariaLabel="session button"
            title="session button"
          />
          <span>DATE</span>
          <Button
            classname="movie-sessions__button"
            text="20:00"
            ariaLabel="session button"
            title="session button"
          />
        </div>
      </section>
    </MovieDetailPageStyled>
  );
};

export default MovieDetailPage;

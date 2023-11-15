import Button from "../../components/Button/Button";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";

const MovieDetailPage = (): React.ReactElement => {
  const movie = moviesMock[0];
  return (
    <>
      <section className="movie-info">
        <img
          className="movie-info__poster"
          src="https://i.ibb.co/FDRMDLQ/barbie-big.webp"
          alt=""
          width={320}
          height={467}
        />
        <h1 className="movie-info__title">{movie.title}</h1>
        <h2 className="movie-info__director">{movie.director}</h2>
        <span className="movie-info__runtime">Runtime: {movie.runtime}</span>
        <span className="movie-info__genre">Genre: {movie.genre}</span>
        <p className="movie-info__synopsis">{movie.synopsis}</p>
      </section>
      <section className="movie-sessions">
        <h2 className="movie-sessions__title">Sessions</h2>
        <span>DATE</span>
        <Button classname="session-button" text="18:30" />
        <span>DATE</span>
        <Button classname="session-button" text="20:00" />
      </section>
    </>
  );
};

export default MovieDetailPage;

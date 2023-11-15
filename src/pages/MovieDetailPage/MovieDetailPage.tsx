import Button from "../../components/Button/Button";
import { moviesMock } from "../../mocks/moviesMocks/moviesMock";
import MovieDetailPageStyled from "./MovieDetailPageStyled";

const MovieDetailPage = (): React.ReactElement => {
  const movie = moviesMock[0];
  return (
    <MovieDetailPageStyled>
      <section className="movie">
        <img
          className="movie__poster"
          src="https://i.ibb.co/FDRMDLQ/barbie-big.webp"
          alt=""
          width={320}
          height={467}
        />
        <div className="movie-info">
          <h1 className="movie-info__title">{movie.title}</h1>
          <h2 className="movie-info__director">{movie.director}</h2>
          <span className="movie-info__runtime">Runtime: {movie.runtime}</span>
          <span className="movie-info__genre">Genre: {movie.genre}</span>
          <p className="movie-info__synopsis">{movie.synopsis}</p>
        </div>
      </section>
      <section className="movie-sessions">
        <h2 className="movie-sessions__title">Sessions</h2>
        <span>DATE</span>
        <Button classname="movie-sessions__button" text="18:30" />
        <span>DATE</span>
        <Button classname="movie-sessions__button" text="20:00" />
      </section>
    </MovieDetailPageStyled>
  );
};

export default MovieDetailPage;

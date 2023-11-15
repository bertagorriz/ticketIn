import { MovieStructure } from "../../entities/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movieProps: MovieStructure;
}

const MovieCard = ({ movieProps }: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled className="movie">
      <img
        className="movie__poster"
        src={movieProps.posterUrl[1]}
        alt={`${movieProps.title} poster`}
        width="130px"
        height="190px"
      />
      <h2 className="movie__title">{movieProps.title}</h2>
    </MovieCardStyled>
  );
};

export default MovieCard;
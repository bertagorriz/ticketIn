import { Link } from "react-router-dom";
import { MovieStructure } from "../../entities/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import path from "../../routers/paths/paths";

interface MovieCardProps {
  movieProps: MovieStructure;
}

const MovieCard = ({
  movieProps: { id, posterUrl, title },
}: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled className="movie">
      <Link to={`${path.movies}/${id}`}>
        <img
          className="movie__poster"
          src={posterUrl[1]}
          alt={`${title} poster`}
          width="130px"
          height="190px"
        />
        <h2 className="movie__title">{title}</h2>
      </Link>
    </MovieCardStyled>
  );
};

export default MovieCard;

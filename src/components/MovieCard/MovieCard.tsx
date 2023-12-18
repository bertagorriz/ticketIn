import { Link } from "react-router-dom";
import slugify from "slugify";
import { MovieStructure } from "../../entities/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import paths from "../../routers/paths/paths";

interface MovieCardProps {
  movieProps: MovieStructure;
  isLazy?: "lazy" | "eager";
}

const MovieCard = ({
  movieProps: { posterUrl, title },
  isLazy,
}: MovieCardProps): React.ReactElement => {
  const movieSlug = slugify(title, { lower: true });

  return (
    <MovieCardStyled className="movie">
      <Link to={`${paths.movies}/${movieSlug}`} className="movie">
        <img
          className="movie__poster"
          src={posterUrl[1]}
          alt={`${title} poster`}
          width="130"
          height="190"
          loading={isLazy}
        />
        <h2 className="movie__title">{title}</h2>
      </Link>
    </MovieCardStyled>
  );
};

export default MovieCard;

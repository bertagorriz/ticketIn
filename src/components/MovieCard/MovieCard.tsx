import { MovieStructure } from "../../entities/movies/types";

interface MovieCardProps {
  movieProps: MovieStructure;
}

const MovieCard = ({ movieProps }: MovieCardProps): React.ReactElement => {
  return (
    <article className="movie">
      <img
        className="movie__poster"
        src={movieProps.posterUrl[1]}
        alt={`${movieProps.title} poster`}
        width="130px"
        height="190px"
      />
      <h2 className="movie__title">{movieProps.title}</h2>
    </article>
  );
};

export default MovieCard;

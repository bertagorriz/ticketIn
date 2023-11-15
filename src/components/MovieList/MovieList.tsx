import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import MoviesListStyled from "./MovieListStyled";

const MovieList = (): React.ReactElement => {
  const { moviesData } = useAppSelector((store) => store.movies);

  return (
    <MoviesListStyled>
      <ul className="cards-list">
        {moviesData.map((movie, position) => (
          <li key={position}>
            <MovieCard movieProps={movie} />
          </li>
        ))}
      </ul>
    </MoviesListStyled>
  );
};

export default MovieList;

import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import MoviesListStyled from "./MovieListStyled";

const MovieList = (): React.ReactElement => {
  const { moviesData } = useAppSelector((store) => store.movies);

  const eagerPosition = 4;

  return (
    <MoviesListStyled>
      <ul className="cards-list">
        {moviesData.map((movie, position) => (
          <li key={position}>
            <MovieCard
              movieProps={movie}
              isLazy={position < eagerPosition ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>
    </MoviesListStyled>
  );
};

export default MovieList;

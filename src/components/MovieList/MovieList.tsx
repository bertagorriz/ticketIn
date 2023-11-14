import { useAppSelector } from "../../store";
import MoviesListStyled from "./MovieListStyled";

const MovieList = (): React.ReactElement => {
  const { moviesData } = useAppSelector((store) => store.movies);

  return (
    <MoviesListStyled>
      <ul className="cards-list">
        {moviesData.map((_movie, position) => (
          <li key={position}>
            <article id={position.toString()}></article>
          </li>
        ))}
      </ul>
    </MoviesListStyled>
  );
};

export default MovieList;

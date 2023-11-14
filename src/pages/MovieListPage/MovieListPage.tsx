import { useAppDispatch } from "../../store";
import MovieList from "../../components/MovieList/MovieList";
import { loadMoviesActionCreator } from "../../entities/movies/moviesSlice/moviesSlice";
import { moviesMock } from "../../mocks/moviesMock";
import MovieListPageStyled from "./MovieListPageStyled";

const MovieListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadMoviesActionCreator(moviesMock));
  return (
    <MovieListPageStyled>
      <h1 className="title">Choose a movie</h1>
      <MovieList />
    </MovieListPageStyled>
  );
};

export default MovieListPage;

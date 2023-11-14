import { loadMoviesActionCreator } from "../../entities/movies/moviesSlice/moviesSlice";
import { moviesMock } from "../../mocks/moviesMock";
import { useAppDispatch } from "../../store";

const MovieListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadMoviesActionCreator(moviesMock));
  return <h1 className="title">Choose a movie</h1>;
};

export default MovieListPage;

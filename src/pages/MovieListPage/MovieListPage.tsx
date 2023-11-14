import MovieList from "../../components/MovieList/MovieList";
import MovieListPageStyled from "./MovieListPageStyled";

const MovieListPage = (): React.ReactElement => {
  return (
    <MovieListPageStyled>
      <h1 className="title">Choose a movie</h1>
      <MovieList />
    </MovieListPageStyled>
  );
};

export default MovieListPage;

import { useAppDispatch } from "../../store";
import MovieList from "../../components/MovieList/MovieList";
import { loadMoviesActionCreator } from "../../entities/movies/moviesSlice/moviesSlice";

import { useEffect } from "react";
import MovieListPageStyled from "./MovieListPageStyled";
import useMovies from "../../entities/movies/useMovies/useMovies";

const MovieListPage = (): React.ReactElement => {
  const { getMovies } = useMovies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      dispatch(loadMoviesActionCreator(movies));
    })();
  }, [dispatch, getMovies]);

  return (
    <MovieListPageStyled>
      <h1 className="title">Choose a movie</h1>
      <MovieList />
    </MovieListPageStyled>
  );
};

export default MovieListPage;

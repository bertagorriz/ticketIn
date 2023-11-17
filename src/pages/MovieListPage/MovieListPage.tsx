import { useAppDispatch, useAppSelector } from "../../store";
import MovieList from "../../components/MovieList/MovieList";
import { loadMoviesActionCreator } from "../../entities/movies/moviesSlice/moviesSlice";
import { useEffect } from "react";
import MovieListPageStyled from "./MovieListPageStyled";
import useMovies from "../../entities/movies/useMovies/useMovies";
import MovieListSkeleton from "../../components/Loaders/MovieListLoading/MovieListSkeleton";

const MovieListPage = (): React.ReactElement => {
  const { getMovies } = useMovies();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((store) => store.ui);

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      dispatch(loadMoviesActionCreator(movies));
    })();
  }, [dispatch, getMovies]);

  return (
    <MovieListPageStyled>
      {isLoading ? (
        <MovieListSkeleton />
      ) : (
        <>
          <h1 className="title">Choose a movie</h1>
          <MovieList />
        </>
      )}
    </MovieListPageStyled>
  );
};

export default MovieListPage;

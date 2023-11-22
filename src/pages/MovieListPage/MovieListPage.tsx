import { useAppDispatch, useAppSelector } from "../../store";
import MovieList from "../../components/MovieList/MovieList";
import { loadMoviesActionCreator } from "../../entities/movies/slice/moviesSlice";
import { useEffect } from "react";
import MovieListPageStyled from "./MovieListPageStyled";
import useMovies from "../../entities/movies/hooks/useMovies";
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
          <div className="box">
            <h1 className="box__title">Choose a movie</h1>
          </div>
          <MovieList />
        </>
      )}
    </MovieListPageStyled>
  );
};

export default MovieListPage;

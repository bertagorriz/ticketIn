import { useCallback } from "react";
import { MovieStructure } from "../types";
import { useAppDispatch } from "../../../store";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../ui/uiSlice";
import showToast from "../../../toast/showToast";
import MoviesClient from "../services/types";

const useMovies = (moviesClient: MoviesClient) => {
  const dispatch = useAppDispatch();

  const getMovies = useCallback(async (): Promise<MovieStructure[]> => {
    try {
      dispatch(showSkeletonActionCreator());

      const movies = await moviesClient.getMovies();

      dispatch(hideSkeletonActionCreator());
      return movies;
    } catch {
      dispatch(hideSkeletonActionCreator());

      const error = "Sorry, movies couldn't be loaded";
      showToast(error, "error");
      throw error;
    }
  }, [dispatch, moviesClient]);

  const getOneMovie = useCallback(
    async (id: string): Promise<MovieStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const movie = await moviesClient.getOneMovie(id);

        dispatch(hideSkeletonActionCreator());

        return movie;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, movie couldn't be loaded";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch, moviesClient],
  );

  return { getMovies, getOneMovie };
};

export default useMovies;

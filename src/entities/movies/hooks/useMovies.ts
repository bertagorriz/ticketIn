import { useCallback } from "react";
import axios from "axios";
import { MovieStructure } from "../types";
import paths from "../../../routers/paths/paths";
import { useAppDispatch } from "../../../store";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../ui/uiSlice";
import showToast from "../../../toast/showToast";

const apiUrl = import.meta.env.VITE_API_URL;

const useMovies = () => {
  const dispatch = useAppDispatch();

  const getMovies = useCallback(async (): Promise<MovieStructure[]> => {
    try {
      dispatch(showSkeletonActionCreator());

      const { data: movies } = await axios.get<MovieStructure[]>(
        `${apiUrl}${paths.movies}`,
      );

      dispatch(hideSkeletonActionCreator());
      return movies;
    } catch {
      dispatch(hideSkeletonActionCreator());

      const error = "Sorry, movies couldn't be loaded";
      showToast(error, "error");
      throw error;
    }
  }, [dispatch]);

  const getOneMovie = useCallback(
    async (id: string): Promise<MovieStructure> => {
      try {
        dispatch(showSkeletonActionCreator());

        const { data: movie } = await axios.get<MovieStructure>(
          `${apiUrl}${paths.movies}/${id}`,
        );

        dispatch(hideSkeletonActionCreator());

        return movie;
      } catch {
        dispatch(hideSkeletonActionCreator());

        const error = "Sorry, movie couldn't be loaded";
        showToast(error, "error");
        throw error;
      }
    },
    [dispatch],
  );

  return { getMovies, getOneMovie };
};

export default useMovies;

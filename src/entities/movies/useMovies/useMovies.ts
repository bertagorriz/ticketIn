import { useCallback } from "react";
import axios from "axios";
import { MovieStructure } from "../types";
import path from "../../../routers/paths/paths";
import { useAppDispatch } from "../../../store";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useMovies = () => {
  const dispatch = useAppDispatch();

  const getMovies = useCallback(async (): Promise<MovieStructure[]> => {
    try {
      dispatch(showSkeletonActionCreator());

      const { data: movies } = await axios.get<MovieStructure[]>(
        `${apiUrl}${path.movies}`,
      );

      dispatch(hideSkeletonActionCreator());
      return movies;
    } catch {
      dispatch(hideSkeletonActionCreator());

      const error = "Sorry, movies couldn't be loaded";
      throw error;
    }
  }, [dispatch]);

  return { getMovies };
};

export default useMovies;

import { useCallback } from "react";
import axios from "axios";
import { MovieStructure } from "../types";
import path from "../../../routers/paths/paths";

const apiUrl = import.meta.env.VITE_API_URL;

const useMovies = () => {
  const getMovies = useCallback(async (): Promise<MovieStructure[]> => {
    try {
      const { data: movies } = await axios.get<MovieStructure[]>(
        `${apiUrl}${path.movies}`,
      );
      return movies;
    } catch {
      const error = "Sorry, movies couldn't be loaded";
      throw error;
    }
  }, []);

  return { getMovies };
};

export default useMovies;

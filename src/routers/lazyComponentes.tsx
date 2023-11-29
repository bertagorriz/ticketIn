import { lazy } from "react";

export const LazyMovieLisPage = lazy(
  () => import("../pages/MovieListPage/MovieListPage"),
);

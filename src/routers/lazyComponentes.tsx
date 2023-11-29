import { lazy } from "react";

export const LazyMovieLisPage = lazy(
  () => import("../pages/MovieListPage/MovieListPage"),
);

export const LazyMovieDetailPage = lazy(
  () => import("../pages/MovieDetailPage/MovieDetailPage"),
);

import { lazy } from "react";

export const LazyMovieLisPage = lazy(
  () => import("../pages/MovieListPage/MovieListPage"),
);

export const LazyMovieDetailPage = lazy(
  () => import("../pages/MovieDetailPage/MovieDetailPage"),
);

export const LazySeatsPage = lazy(() => import("../pages/SeatsPage/SeatsPage"));

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

export const LazyTicketPage = lazy(
  () => import("../pages/TicketPage/TicketPage"),
);

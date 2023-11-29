import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import paths from "./paths/paths";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import {
  LazyMovieDetailPage,
  LazyMovieLisPage,
  LazySeatsPage,
} from "./lazyComponentes";

const appRouter = createBrowserRouter([
  {
    path: paths.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.movies} replace />,
      },
      {
        path: paths.movies,
        element: (
          <Suspense>
            <LazyMovieLisPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.movies}${paths.detail}`,
        element: (
          <Suspense>
            <LazyMovieDetailPage />
          </Suspense>
        ),
      },
      {
        path: paths.errorPage,
        element: <NotFoundPage />,
      },
      {
        path: `${paths.seats}${paths.movieId}${paths.sessionId}`,
        element: (
          <Suspense>
            <LazySeatsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;

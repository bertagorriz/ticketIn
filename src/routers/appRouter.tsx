import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import paths from "./paths/paths";
import App from "../components/App/App";
import {
  LazyMovieDetailPage,
  LazyMovieLisPage,
  LazyNotFoundPage,
  LazySeatsPage,
  LazyTicketPage,
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
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.seats}${paths.detail}${paths.sessionId}`,
        element: (
          <Suspense>
            <LazySeatsPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.tickets}`,
        element: (
          <Suspense>
            <LazyTicketPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;

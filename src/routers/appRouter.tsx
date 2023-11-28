import { Navigate, createBrowserRouter } from "react-router-dom";
import paths from "./paths/paths";
import App from "../components/App/App";
import MovieListPage from "../pages/MovieListPage/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SeatsPage from "../pages/SeatsPage/SeatsPage";

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
        element: <MovieListPage />,
      },
      {
        path: `${paths.movies}${paths.detail}`,
        element: <MovieDetailPage />,
      },
      {
        path: paths.errorPage,
        element: <NotFoundPage />,
      },
      {
        path: `${paths.seats}${paths.movieId}${paths.sessionId}`,
        element: <SeatsPage />,
      },
    ],
  },
]);

export default appRouter;

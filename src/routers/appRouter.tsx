import { Navigate, createBrowserRouter } from "react-router-dom";
import path from "./paths/paths";
import App from "../components/App/App";
import MovieListPage from "../pages/MovieListPage/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SeatsPage from "../pages/SeatsPage/SeatsPage";

const appRouter = createBrowserRouter([
  {
    path: path.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={path.movies} replace />,
      },
      {
        path: path.movies,
        element: <MovieListPage />,
      },
      {
        path: `${path.movies}${path.detail}`,
        element: <MovieDetailPage />,
      },
      {
        path: path.errorPage,
        element: <NotFoundPage />,
      },
      {
        path: `${path.seats}${path.detail}${path.detail}`,
        element: <SeatsPage />,
      },
    ],
  },
]);

export default appRouter;

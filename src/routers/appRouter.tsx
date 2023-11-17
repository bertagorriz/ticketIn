import { Navigate, createBrowserRouter } from "react-router-dom";
import path from "./paths/paths";
import App from "../components/App/App";
import MovieListPage from "../pages/MovieListPage/MovieListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        path: path.errorPage,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default appRouter;

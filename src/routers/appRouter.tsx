import { Navigate, createBrowserRouter } from "react-router-dom";
import path from "./paths/paths";
import App from "../components/App/App";

const appRouter = createBrowserRouter([
  {
    path: path.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={path.movies} replace />,
      },
    ],
  },
]);

export default appRouter;

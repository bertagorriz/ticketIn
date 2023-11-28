import PathStructure from "./types";

const path: PathStructure = {
  app: "/",
  movies: "/movies",
  detail: "/:id",
  sessions: "/sessions",
  seats: "/seats",
  movieId: "/:movieId",
  sessionId: "/:sessionId",
  tickets: "/tickets",
  errorPage: "*",
};

export default path;

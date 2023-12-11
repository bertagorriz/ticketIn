import PathStructure from "./types";

const paths: PathStructure = {
  app: "/",
  movies: "/movies",
  detail: "/:movieSlug",
  sessions: "/sessions",
  seats: "/seats",
  movieId: "/:movieId",
  sessionId: "/:sessionId",
  tickets: "/tickets",
  errorPage: "*",
};

export default paths;

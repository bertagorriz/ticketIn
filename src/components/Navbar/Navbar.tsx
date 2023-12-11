import { Link, useLocation, useParams } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths/paths";
import { useMemo } from "react";
import { useAppSelector } from "../../store";
import PathStructure from "../../routers/paths/types";

const Navbar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const pathNameLocation = pathname.split("/");
  const { movieId, sessionId } = useParams();
  const { id } = useAppSelector((store) => store.movies.selectedMovie);

  const hasBackOption = useMemo(() => {
    return (
      pathname === paths.tickets ||
      pathname === `${paths.seats}/${movieId}/${sessionId}` ||
      pathname === `${paths.movies}/${id}`
    );
  }, [id, movieId, pathname, sessionId]);

  const backToLastPage = (
    path: Partial<keyof PathStructure>,
    paths: Partial<PathStructure>,
    movieId: number,
  ) => {
    switch (path) {
      case "seats":
        return `${paths.movies}/${movieId}`;
      case "movies":
        return paths.movies;
    }
  };

  return (
    <NavbarStyled>
      <Link to={paths.movies} className="navbar-container__home-button">
        <img
          src="/images/navbar/ticketin-logo.svg"
          alt="ticketIn Logo"
          width="146"
          height="28.05"
        />
      </Link>
      {hasBackOption && (
        <Link
          to={
            backToLastPage(
              pathNameLocation[1] as keyof PathStructure,
              paths,
              id,
            ) as string
          }
          className="navbar-container__backtopage-button"
        >
          <img
            src="/images/navbar/back-to-page-icon.svg"
            alt="back to page button"
            height="14"
            width="16"
          />
        </Link>
      )}
    </NavbarStyled>
  );
};

export default Navbar;

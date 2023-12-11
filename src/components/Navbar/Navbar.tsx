import { Link, useLocation, useParams } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths/paths";
import { useMemo } from "react";
import { useAppSelector } from "../../store";
import PathStructure from "../../routers/paths/types";

const Navbar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const pathNameLocation = pathname.split("/");
  const { movieSlug, sessionId } = useParams();
  const { id } = useAppSelector((store) => store.movies.selectedMovie);

  const hasBackOption = useMemo(() => {
    return (
      pathname === paths.tickets ||
      pathname === `${paths.seats}/${movieSlug}/${sessionId}` ||
      pathname === `${paths.movies}/${id}`
    );
  }, [id, movieSlug, pathname, sessionId]);

  const backToLastPage = (
    path: Partial<keyof PathStructure>,
    paths: Partial<PathStructure>,
    movieSlug: string,
  ) => {
    switch (path) {
      case "seats":
        return `${paths.movies}/${movieSlug}`;
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
              id.toString(),
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

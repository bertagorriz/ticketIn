import { Link, useLocation } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths/paths";
import { useMemo } from "react";
import { useAppSelector } from "../../store";

const Navbar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const { selectedMovie } = useAppSelector((store) => store.movies);

  const isPathname = useMemo(() => {
    return (
      pathname === paths.tickets ||
      pathname === paths.seats ||
      pathname === `${paths.movies}/${selectedMovie.id}`
    );
  }, [pathname, selectedMovie]);

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
      {isPathname && (
        <Link to={paths.movies} className="navbar-container__backtopage-button">
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

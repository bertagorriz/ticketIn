import { NavLink, useLocation } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import path from "../../routers/paths/paths";
import { useMemo } from "react";

const Navbar = (): React.ReactElement => {
  const { pathname } = useLocation();

  const isPathname = useMemo(() => {
    return (
      pathname === path.sessions ||
      pathname === path.tickets ||
      pathname === path.seats
    );
  }, [pathname]);

  return (
    <NavbarStyled>
      <NavLink to={path.movies} className="navbar-container__home-button">
        <img
          src="/images/navbar/ticketin-logo.svg"
          alt="ticketIn Logo"
          width="146"
          height="28.05"
        />
      </NavLink>
      {isPathname && (
        <button className="navbar-container__backtopage-button">
          <img
            src="/images/navbar/back-to-page-icon.svg"
            alt="back to page button"
            height="14"
            width="16"
          />
        </button>
      )}
    </NavbarStyled>
  );
};

export default Navbar;

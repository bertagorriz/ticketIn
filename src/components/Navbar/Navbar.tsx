import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import path from "../../routers/paths/paths";

const Navbar = (): React.ReactElement => {
  const pathname = window.location.pathname;

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
      {pathname !== path.movies && (
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

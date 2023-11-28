import { NavLink } from "react-router-dom";
import paths from "../../routers/paths/paths";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <div className="feedback">
        <span className="feedback__error">404</span>
        <h1 className="feedback__message">page not found</h1>
      </div>
      <NavLink
        className="home"
        to={paths.movies}
        title="back home"
        aria-label="back home"
      >
        BACK HOME
      </NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;

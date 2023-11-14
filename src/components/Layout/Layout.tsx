import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import MovieListPage from "../../pages/MovieListPage/MovieListPage";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <MovieListPage />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;

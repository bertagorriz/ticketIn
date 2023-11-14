import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import MovieListPage from "../../pages/MovieListPage/MovieListPage";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <MovieListPage />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;

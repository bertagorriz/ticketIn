import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import MovieListSkeleton from "../Loaders/MovieListLoading/MovieListSkeleton";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <MovieListSkeleton />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;

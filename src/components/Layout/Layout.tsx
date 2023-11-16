import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import "../../Toast/ToastStyled.css";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;

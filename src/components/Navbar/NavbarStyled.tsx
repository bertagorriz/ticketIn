import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 30px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.header};

  .navbar-container__home-button {
    width: 146px;
    height: 28.05px;
  }

  .navbar-container__backtopage-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    width: 48px;
    height: 48px;
  }
`;

export default NavbarStyled;

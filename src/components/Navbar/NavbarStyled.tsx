import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.header};

  .logo {
  }
`;

export default NavbarStyled;

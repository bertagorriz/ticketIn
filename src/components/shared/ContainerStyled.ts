import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: auto;
  padding: 0 20px 30px 20px;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default ContainerStyled;

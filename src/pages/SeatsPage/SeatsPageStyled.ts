import styled from "styled-components";

const SeatsPageStyled = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;

  .title {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    padding: 30px 0;
  }
`;

export default SeatsPageStyled;

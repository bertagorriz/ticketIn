import { styled } from "styled-components";

const MovieListPageStyled = styled.div`
  .title {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    padding: 30px 0;
  }
`;

export default MovieListPageStyled;

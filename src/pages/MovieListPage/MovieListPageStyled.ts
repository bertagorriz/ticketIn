import { styled } from "styled-components";

const MovieListPageStyled = styled.div`
  .box {
    &__title {
      width: 130px;
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      margin: 0 auto;
      white-space: nowrap;
    }

    padding: 30px 0;
    display: grid;
    margin: 0 auto;
    gap: 20px;
    max-width: 700px;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 1000px) {
      display: grid;
      margin: 0 auto;
      margin-left: -30px;
      max-width: 2000px;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .opacity {
    opacity: 0.5;
  }
`;

export default MovieListPageStyled;

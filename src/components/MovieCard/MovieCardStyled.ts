import { styled } from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  .movie {
    &__poster {
      border-radius: 15px;
    }

    &__title {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      color: ${(props) => props.theme.colors.text};
      margin-top: 12px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

export default MovieCardStyled;

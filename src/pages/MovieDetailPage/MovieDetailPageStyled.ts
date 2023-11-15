import { styled } from "styled-components";

const MovieDetailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  padding: 0;

  .movie {
    display: flex;
    flex-direction: column;

    &__poster {
      position: relative;
      margin: -20px;
      margin-top: 0px;
    }
  }

  .movie-info {
    &__title {
      font-size: ${(props) => props.theme.fontSize.extraLarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      margin-bottom: 6px;
    }

    &__director {
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      margin-bottom: 30px;
    }

    &__runtime,
    &__genre,
    &__synopsis {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      margin-bottom: 2px;
    }

    &__synopsis {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  .movie-sessions {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      margin-bottom: 20px;
    }

    &__button {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.header};
      width: 87px;
      height: 48px;
      border-radius: 7px;
      margin-top: 15px;
      margin-bottom: 26px;
    }
  }
`;

export default MovieDetailPageStyled;

import { styled } from "styled-components";

const MovieDetailPageStyled = styled.main`
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  margin: 0 -20px;

  .movie-poster {
    margin-top: 0px;
  }

  .movie {
    background: linear-gradient(
      180deg,
      rgba(39, 40, 78, 0) 0%,
      rgba(43, 43, 43, -1) -6%,
      #2a2a2a 36%
    );
    position: absolute;
    padding: 156px 20px 30px;
    margin-top: -445px;
    min-width: 320px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    padding-top: 112px;
    gap: 25px;

    &__title {
      font-size: ${(props) => props.theme.fontSize.extraLarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }

    &__director {
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }

    &__runtime,
    &__genre,
    &__synopsis {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
    }

    &__synopsis {
      margin-bottom: 30px;
    }
  }

  .movie-sessions {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__title {
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }

    &__button {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.header};
      width: 87px;
      height: 48px;
      border-radius: 7px;
    }
  }
`;

export default MovieDetailPageStyled;

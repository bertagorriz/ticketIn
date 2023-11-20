import { styled } from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  margin-top: 150px;
  .feedback {
    display: flex;
    flex-direction: column;
    text-align: center;

    &__error,
    &__message {
      color: ${(props) => props.theme.colors.corporative};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }

    &__error {
      font-size: 6.25rem;
    }

    &__message {
      font-size: ${(props) => props.theme.fontSize.large};
    }
  }
  .home {
    background-color: ${(props) => props.theme.colors.corporative};
    font-size: ${(props) => props.theme.fontSize.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 160px;
    height: 48px;
    border-radius: 7px;
  }
`;

export default NotFoundPageStyled;

import styled from "styled-components";

const SeatsInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: -30px -20px;
  width: 320px;
  padding: 28px;
  border-radius: 20px 20px 0 0;
  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};

  .info-container {
    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &--title {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    &__text {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .buy-container {
    display: flex;
    justify-content: center;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 48px;
      background-color: #2c2c2c;
      border-radius: 7px;
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.regular};

      &:hover {
        background-color: ${(props) => props.theme.colors.hover};
      }
    }
  }
`;

export default SeatsInfoStyled;

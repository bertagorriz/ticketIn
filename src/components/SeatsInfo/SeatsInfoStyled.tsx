import styled from "styled-components";

const SeatsInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: -30px -20px;
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
`;

export default SeatsInfoStyled;

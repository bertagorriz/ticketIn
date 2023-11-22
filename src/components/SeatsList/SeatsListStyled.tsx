import styled from "styled-components";

const SeatsListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  .seats {
    &__row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
    }

    &__legend {
      display: flex;
      justify-content: center;
      gap: 14px;
      color: ${(props) => props.theme.colors.text};

      &--available,
      &--selected,
      &--reserved {
        display: flex;
        gap: 5px;
      }
    }
  }
`;

export default SeatsListStyled;

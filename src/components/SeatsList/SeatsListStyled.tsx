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
  }
`;

export default SeatsListStyled;

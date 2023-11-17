import styled from "styled-components";

const MoviesListStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;

  .cards-list {
    display: grid;
    margin: 0 auto;
    gap: 20px;
    max-width: 700px;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 1000px) {
      display: grid;
      margin: 0 auto;
      gap: 50px;
      max-width: 2000px;
      align-items: start;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default MoviesListStyled;

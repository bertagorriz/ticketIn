import styled from "styled-components";

const SeatsContainerStyled = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  padding: 28px;
  gap: 120px;
  align-items: center;
  .buy {
    position: absolute;
    background-color: ${(props) => props.theme.colors.buy};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.medium};
    font-family: ${(props) => props.theme.fonts.primary};
    width: 130px;
    height: 48px;
    border-radius: 7px;
    margin-top: 600px;
  }
`;

export default SeatsContainerStyled;

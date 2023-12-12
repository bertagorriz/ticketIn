import { styled } from "styled-components";

const ModalStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.available + 70};
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-container {
    position: relative;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    width: 280px;
    height: 330px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 120px;
    gap: 20px;

    &__header {
      background-color: ${(props) => props.theme.colors.header};
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__feeback {
      font-size: ${(props) => props.theme.fontSize.small};
    }
    &__message {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      padding: 0px 20px;
    }
    &__url {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      padding: 0px 20px;
    }
  }
  .home {
    background-color: ${(props) => props.theme.colors.corporative};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.colors.header};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 48px;
    border-radius: 7px;
  }
  .close-button {
    display: flex;
    position: absolute;
    right: 20px;
  }
`;

export default ModalStyled;

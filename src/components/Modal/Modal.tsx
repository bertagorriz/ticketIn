import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import paths from "../../routers/paths/paths";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  url: string;
}

const Modal = ({ url }: ModalProps): React.ReactElement => {
  return (
    <ModalStyled>
      <article className="modal-container">
        <div className="modal-container__header">
          <img
            src="/images/navbar/ticketin-logo.svg"
            alt="ticketIn Logo"
            width="146"
            height="28"
          />
          <Button
            classname="close-button"
            image={
              <img
                src="/images/close-square.svg"
                alt="close"
                width={25}
                height={25}
              />
            }
          />
        </div>
        <span className="modal-container__feeback">Fantastic!</span>
        <p className="modal-container__message">
          On the following URL, you can check your purchase ticket:
        </p>
        <span className="modal-container__url">{url}</span>
        <NavLink
          className="home"
          to={paths.movies}
          title="back home"
          aria-label="back home"
        >
          BACK HOME
        </NavLink>
      </article>
    </ModalStyled>
  );
};

export default Modal;

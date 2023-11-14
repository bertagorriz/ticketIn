import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <button>
        <img
          src="/images/navbar/Logo.svg"
          alt="ticketIn Logo"
          width="146"
          height="28.05"
        />
      </button>
      <button></button>
    </NavbarStyled>
  );
};

export default Navbar;

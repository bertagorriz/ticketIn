import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/inter";

const theme: DefaultTheme = {
  colors: {
    background: "#2a2a2a",
    header: "#000",
    text: "#fff",
    available: "#f2f2f2",
    selected: "#cb2b2b",
    reserved: "#098f3e",
  },
  fonts: {
    primary: "Inter",
  },
  fontSize: {
    extraSmall: "16px",
    small: "20px",
    medium: "22px",
    large: "24px",
    extraLarge: "35px",
  },
  fontWeight: {
    regular: "400",
    semiBold: "600",
  },
};

export default theme;

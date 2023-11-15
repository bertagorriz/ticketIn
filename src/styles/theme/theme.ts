import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/inter";

const theme: DefaultTheme = {
  colors: {
    background: "#2a2a2a",
    header: "#000",
    corporative: "#ffc715",
    text: "#fff",
    hover: "#585858",
    available: "#f2f2f2",
    selected: "#cb2b2b",
    reserved: "#098f3e",
  },
  fonts: {
    primary: "Inter",
  },
  fontSize: {
    extraSmall: "1rem",
    small: "1.25rem",
    medium: "1.375rem",
    large: "1.5rem",
    extraLarge: "2.188rem",
  },
  fontWeight: {
    regular: "400",
    semiBold: "600",
  },
};

export default theme;

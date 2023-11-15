import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      background: string;
      header: string;
      text: string;
      hover: string;
      corporative: string;
      available: string;
      reserved: string;
      selected: string;
    };

    fonts: {
      primary: string;
    };

    fontSize: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    fontWeight: {
      regular: string;
      semiBold: string;
    };
  }
}

export default DefaultTheme;

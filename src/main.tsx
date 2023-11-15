import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor="#585858" highlightColor="#2a2a2a">
        <Provider store={store}>
          <GlobalStyle />
          <RouterProvider router={appRouter} />
        </Provider>
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>,
);

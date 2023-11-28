import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import paths from "../routers/paths/paths";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>,
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={testStore}>{children}</Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [
    {
      path: paths.app,
      element: ui,
    },
    {
      path: paths.movies,
      element: ui,
    },
    {
      path: paths.sessions,
      element: ui,
    },
    {
      path: `${paths.seats}${paths.movieId}${paths.sessionId}`,
      element: ui,
    },
  ];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export const wrapWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

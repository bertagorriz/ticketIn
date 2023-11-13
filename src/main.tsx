import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
);

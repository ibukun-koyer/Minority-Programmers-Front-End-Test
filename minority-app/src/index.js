import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/data";
import App from "./App";

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

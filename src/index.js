import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { ContextProvider } from "../src/contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider children={<App />}></ContextProvider>,
  document.getElementById("root")
);

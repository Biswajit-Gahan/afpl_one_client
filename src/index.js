import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
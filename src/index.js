import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
// import Inner from "./Inner";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App />
);

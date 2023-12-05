import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import RootContext from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);

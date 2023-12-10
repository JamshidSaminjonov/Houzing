import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import RootContext from "./context";
import "antd/dist/antd";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RootContext>
      <Root />
    </RootContext>
  </>
);

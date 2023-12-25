import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import RootContext from "./context";
import "antd/dist/antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RootContext>
      <Root />
    </RootContext>
  </>
);

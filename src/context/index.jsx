import React from "react";
import { createContext } from "react";
import PropertiesProvider from "./Properties";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Root.Provider>
  );
};

export default RootContext;

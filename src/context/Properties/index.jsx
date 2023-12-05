import React from "react";
import { createContext, useReducer } from "react";
import { reducer } from "./reduce";

const PropertiesProvider = ({ children }) => {
  const PropertiesContext = createContext();

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;

import React from "react";
import { createContext, useReducer } from "react";
import { reducer } from "./reduce";

const PropertiesContext = createContext();

const [state, dispatch] = useReducer(reducer, []);

const PropertiesProvider = ({ children }) => {
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;

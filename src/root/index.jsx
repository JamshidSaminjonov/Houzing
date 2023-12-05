import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ path, id, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

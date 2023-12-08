import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container width={width} height={height} onClick={onClick} type={type}>
      {children || "generic button"}
    </Container>
  );
};

export default Button;

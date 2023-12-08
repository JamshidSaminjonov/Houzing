import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  name,
  value,
  defaultValue,
  placeholder,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;

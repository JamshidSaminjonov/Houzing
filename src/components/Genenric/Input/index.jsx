import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";
import House from "../../../assets/icons/house.svg";
import Search from "../../../assets/icons/setting.svg";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      name,
      value,
      defaultValue,
      placeholder,
      width,
      height,
      icon,
    },
    ref
  ) => {
    const getIcon = (icon) => {
      switch (icon) {
        case "house":
          return House;
        case "search":
          return Search;
        default:
          break;
      }
    };
    return (
      <Wrapper>
        {/* <Icon src={Houses} /> */}
        <Icon src={getIcon(icon)} icon={icon} />
        <Container
          icon={icon}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default Input;

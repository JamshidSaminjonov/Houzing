import React from "react";
import { Blur, Container, Content, Icon, Img } from "./style";
import noImg from "../../assets/icons/Noimge.png";
import category from "../../assets/icons/category.jpg";
import bedImg from "../../assets/icons/bed.svg";
const CategoryCard = ({ onClick, data = {}, i }) => {
  console.log(onClick, data);
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noImg} />
      <Blur />
      <Content>
        <Icon src={bedImg} />
        {name || "Category name"}
      </Content>
    </Container>
  );
};

export default CategoryCard;

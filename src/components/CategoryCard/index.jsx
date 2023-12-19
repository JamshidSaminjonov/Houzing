import React from "react";
import { Blur, Container, Content, Icon, Img } from "./style";
import noImg from "../../assets/icons/Noimge.png";
import category from "../../assets/icons/category.jpg";
import bedImg from "../../assets/icons/bed.svg";
const CategoryCard = ({ data = {}, i }) => {
  const { name } = data;
  return (
    <Container>
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

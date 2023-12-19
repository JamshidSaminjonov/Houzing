import React from "react";
// import Input from "../Genenric/Input";
import { Container } from "./style";
import { Button, Input } from "../Genenric";
import Carousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../Categorycard";

const Home = () => {
  return (
    <Container>
      <Carousel></Carousel>
      <HouseCard url></HouseCard>
      <CategoryCard></CategoryCard>
    </Container>
  );
};

export default Home;

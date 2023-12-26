import React from "react";
// import Input from "../Genenric/Input";
import { Container } from "./style";
import { Button, Input } from "../Genenric";
import Carousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../Categorycard";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <Carousel></Carousel>
      <Category></Category>
    </Container>
  );
};

export default Home;

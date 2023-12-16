import React from "react";
// import Input from "../Genenric/Input";
import { Container } from "./style";
import { Button, Input } from "../Genenric";
import Carousel from "../Carousel";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <Container>
      <Carousel></Carousel>
      <HouseCard url></HouseCard>
    </Container>
  );
};

export default Home;

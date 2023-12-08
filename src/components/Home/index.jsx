import React from "react";
// import Input from "../Genenric/Input";
import { Container } from "./style";
import { Button, Input } from "../Genenric";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder="test" width="100" height="44" />
      <Button> Button</Button>
    </Container>
  );
};

export default Home;

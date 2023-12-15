import React from "react";
import {
  Arrow,
  Blur,
  Container,
  Content,
  Dec,
  Img,
  Main,
  Price,
  Title,
} from "./style";
import { Carousel } from "antd";
import ArrowIcon from "../../assets/icons/arrow.svg";
import { useRef } from "react";
import house2 from "../../assets/img/house2.png";
import house1 from "../../assets/img/house1.png";

const GenCarousel = () => {
  const slider = useRef();
  const contentStyle = {
    margin: 0,
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onMove = ({ target: { name } }) => {
    if (name == "left") {
      slider.current.prev();
    }
    if (name == "right") {
      slider.current.next();
    }
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={house1} />
        <Img src={house2} />
      </Carousel>
      <Blur />
      <Content>
        <Title>Skyper Pool Partment</Title>
        <Dec>112 Glenwood Ave Hyde Park, Boston, MA</Dec>
        <Price>Skyper Pool Partment</Price>
      </Content>
      <Main>
        <Arrow onClick={onMove} name={"left"} src={ArrowIcon} left="left" />
        <Arrow onClick={onMove} name="right" right={"right"} src={ArrowIcon} />
      </Main>
    </Container>
  );
};

export default GenCarousel;

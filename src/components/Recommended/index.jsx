import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { VITE_APP_BASE_URL: url } = import.meta.env;

const settings = {
  //   className: "right",
  centerMode: true,
  infinite: true,
  centerPadding: "15px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,
  appendDots: (dots) => <h1> {dots} </h1>,
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <HouseCard
              key={index}
              gap={10}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;

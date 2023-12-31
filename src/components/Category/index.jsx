import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// const { REACT_APP_BASE_URL: url } = process.env;
const { VITE_APP_BASE_URL: url } = import.meta.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};
const token =
  "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoianNhbWluam9ub3Y1NzA1QGdtYWlsLmNvbSIsImV4cCI6MTcyMTQyODE1NSwiaWF0IjoxNzAzNDI4MTU1LCJzY29wZSI6IlJPTEVfVVNFUiJ9.EyCpZWw73THyTiKdxbTB1cgZ2K0Px3sfRPR3ecgIAD7mMj8JYDmkzwibNZoql-MwLWRcAQW9LvItu0QtujvHSKA-48Ifda7puuYiLbubm3SdixVC23Q4H0itVPLesY8j9DcI7DgbaMFxgIo70GFoUiL-_3pr2hgDc4kzkwykNIrLz8cTO4rMj1-NWYsuobsZbuO-LOzwtItG6Wv3zGfzrU9nqKkoVYzrUmZC9k2OnTEq2XnE9dB-nT3Z1EQ184FdfzqsE5TPJWF3Zx8p2KpBGh75jHGmRMUe_8B8N3p0ucNwuzqDHcRXKIqBY51IHSDuwGkHqbeWi--CK7Fy0Vd-Aw";

export const GenCarousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //use effet
  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);
  console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              key={value.id}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;

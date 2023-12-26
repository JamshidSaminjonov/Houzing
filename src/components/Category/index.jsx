import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import { Container, Main } from "./style";

import { useRef } from "react";
import CategoryCard from "../Categorycard";
import { useLocation, useNavigate } from "react-router-dom";

const Category = () => {
  const settings = {
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
    centerPadding: "0",
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //navigate
  const navigate = useNavigate();

  //token
  const token =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoianNhbWluam9ub3Y1NzA1QGdtYWlsLmNvbSIsImV4cCI6MTcyMTQyODE1NSwiaWF0IjoxNzAzNDI4MTU1LCJzY29wZSI6IlJPTEVfVVNFUiJ9.EyCpZWw73THyTiKdxbTB1cgZ2K0Px3sfRPR3ecgIAD7mMj8JYDmkzwibNZoql-MwLWRcAQW9LvItu0QtujvHSKA-48Ifda7puuYiLbubm3SdixVC23Q4H0itVPLesY8j9DcI7DgbaMFxgIo70GFoUiL-_3pr2hgDc4kzkwykNIrLz8cTO4rMj1-NWYsuobsZbuO-LOzwtItG6Wv3zGfzrU9nqKkoVYzrUmZC9k2OnTEq2XnE9dB-nT3Z1EQ184FdfzqsE5TPJWF3Zx8p2KpBGh75jHGmRMUe_8B8N3p0ucNwuzqDHcRXKIqBY51IHSDuwGkHqbeWi--CK7Fy0Vd-Aw";

  //fetch
  const [data, setData] = useState([]);
  const { VITE_APP_BASE_URL: url } = import.meta.env;

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
  return (
    <Container>
      <Main>
        <Slider {...settings}>
          {data.map((v, i) => (
            <CategoryCard
              key={v.id}
              data={data[i]}
              onClick={() => navigate(`/properties?category=${v?.name}`)}
            />
          ))}
        </Slider>
      </Main>
    </Container>
  );
};
export default Category;

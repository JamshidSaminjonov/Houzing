import React, { useEffect, useState } from "react";
import HouseCard from "../HouseCard";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [data, setData] = useState([]);
  const { VITE_APP_BASE_URL: url } = import.meta.env;
  const { search } = useLocation();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);
  return (
    <Container>
      {data.map((v, i) => (
        <HouseCard key={v.id} data={data[i]} />
      ))}
    </Container>
  );
};

export default Properties;

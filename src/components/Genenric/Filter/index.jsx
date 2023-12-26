import React, { useEffect, useRef, useState } from "react";
import { Container, Icon, MenuWrapper, Section } from "./style";
import Input from "../Input";
import Button from "../Button";
import Setting from "../../../assets/icons/setting.svg";
import Search from "../../../assets/icons/search.svg";
import { Dropdown } from "antd";
import { uzeReplace } from "../../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";
import { Select, Space } from "antd";

const Filter = ({}) => {
  const location = useLocation();
  const query = useSearch();
  const navigate = useNavigate();
  const CountryRef = useRef();
  const RegionRef = useRef();
  const CityRef = useRef();
  const ZipcodeRef = useRef();
  const RoomRef = useRef();
  const maxPriceRef = useRef();
  const minPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
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

  const handleProvinceChange = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };

  const handleProvinceSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };
  //default value
  const [value, setValue] = useState("Select Category");

  useEffect(() => {
    let res = data?.filter((dfv) => dfv?.id == +query.get("category_id"));

    res?.name && setValue(res?.name);
    !query.get("category_id") && setValue("Select Category");
    console.log(value, "res");
  }, [location?.search, data]);

  const items = [
    {
      key: "1",
      type: "group",
      label: (
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              defaultValue={useSearch().get("country")}
              onChange={onChange}
              name="country"
              ref={CountryRef}
              placeholder={"Country"}
            />
            <Input
              defaultValue={useSearch().get("region")}
              onChange={onChange}
              name="region"
              ref={RegionRef}
              placeholder={"Region"}
            />
            <Input
              defaultValue={useSearch().get("city")}
              onChange={onChange}
              name="city"
              ref={CityRef}
              placeholder={"City"}
            />
            <Input
              defaultValue={useSearch().get("zip_code")}
              onChange={onChange}
              name="zip_code"
              ref={ZipcodeRef}
              placeholder={"Zipcode"}
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            {" "}
            <Input
              defaultValue={useSearch().get("room")}
              onChange={onChange}
              name="room"
              ref={RoomRef}
              placeholder={"Room"}
            />
            <Space>
              <Select
                defaultValue={query.get("sort") || "Select Sort"}
                style={{
                  width: 200,
                  height: 44,
                }}
                onChange={handleProvinceSort}
                options={[
                  { label: "Select Sort", value: "" },
                  { label: "asc", value: "asc" },
                  { label: "desc", value: "desc" },
                ]}
              />
            </Space>
            <Space>
              <Select
                defaultValue={value}
                style={{
                  width: 200,
                  height: 44,
                }}
                onChange={handleProvinceChange}
                options={[
                  { label: "Select Category", value: "" },
                  ...data?.map((value1) => ({
                    label: value1?.name,
                    value: value1?.id,
                  })),
                ]}
              />
            </Space>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            {" "}
            <Input
              defaultValue={useSearch().get("min_price")}
              onChange={onChange}
              name="min_price"
              ref={maxPriceRef}
              placeholder={"Min price"}
            />
            <Input
              defaultValue={useSearch().get("max_price")}
              onChange={onChange}
              name="max_price"
              ref={minPriceRef}
              placeholder={"Max price"}
            />
          </Section>
          <Section footer={"footer"}>
            {" "}
            <Button type={"light"}>Cansel</Button>
            <Button>Submit</Button>
          </Section>
        </MenuWrapper>
      ),
    },
  ];

  return (
    <Container>
      <Input
        icon={"house"}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        arrow
        trigger={"click"}
      >
        <div>
          <Button type={"light"}>
            <Icon src={Setting} alt="Yuq" /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button>
        {" "}
        <Icon src={Search} alt="Yuq" />
        Search
      </Button>
      {/* <Dropdown></Dropdown> */}
    </Container>
  );
};

export default Filter;

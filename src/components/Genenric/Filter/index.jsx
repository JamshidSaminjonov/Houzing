import React, { useRef } from "react";
import { Container, Icon, MenuWrapper, Section } from "./style";
import Input from "../Input";
import Button from "../Button";
import Setting from "../../../assets/icons/setting.svg";
import Search from "../../../assets/icons/search.svg";
import { Dropdown } from "antd";
import { uzeReplace } from "../../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";

const Filter = ({}) => {
  const location = useLocation();
  console.log(useSearch().get("zip_code"));
  const navigate = useNavigate();
  const CountryRef = useRef();
  const RegionRef = useRef();
  const CityRef = useRef();
  const ZipcodeRef = useRef();
  const RoomRef = useRef();
  const SizeRef = useRef();
  const SortRef = useRef();
  const maxPriceRef = useRef();
  const minPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    console.log(name, value);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

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
              defaultValue={useSearch().get("sort")}
              onChange={onChange}
              name="sort"
              ref={SortRef}
              placeholder={"Sort"}
            />
            <Input
              defaultValue={useSearch().get("room")}
              onChange={onChange}
              name="room"
              ref={RoomRef}
              placeholder={"Room"}
            />
            <Input
              defaultValue={useSearch().get("size")}
              onChange={onChange}
              name="size"
              ref={SizeRef}
              placeholder={"Size"}
            />
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

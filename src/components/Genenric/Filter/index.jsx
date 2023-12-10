import React, { useRef } from "react";
import { Container, Icon, MenuWrapper, Section } from "./style";
import Input from "../Input";
import Button from "../Button";
import Setting from "../../../assets/icons/setting.svg";
import Search from "../../../assets/icons/search.svg";
import { Dropdown } from "antd";

const Filter = ({}) => {
  const CountryRef = useRef();
  const RegionRef = useRef();
  const CityRef = useRef();
  const ZipcodeRef = useRef();
  const RoomRef = useRef();
  const SizeRef = useRef();
  const SortRef = useRef();
  const maxPriceRef = useRef();
  const minPriceRef = useRef();
  const items = [
    {
      key: "1",
      type: "group",
      label: (
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input ref={CountryRef} placeholder={"Country"} />
            <Input ref={RegionRef} placeholder={"Region"} />
            <Input ref={CityRef} placeholder={"City"} />
            <Input ref={ZipcodeRef} placeholder={"Zipcode"} />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            {" "}
            <Input ref={RoomRef} placeholder={"Room"} />
            <Input ref={SizeRef} placeholder={"Size"} />
            <Input ref={SortRef} placeholder={"Sort"} />
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            {" "}
            <Input ref={maxPriceRef} placeholder={"Min price"} />
            <Input ref={minPriceRef} placeholder={"Max price"} />
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
      <Button type={"light"}>
        <Icon src={Setting} alt="Yuq" /> Advanced
      </Button>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <div>
          <Button>
            {" "}
            <Icon src={Search} alt="Yuq" />
            Search
          </Button>
        </div>
      </Dropdown>
      {/* <Dropdown></Dropdown> */}
    </Container>
  );
};

export default Filter;

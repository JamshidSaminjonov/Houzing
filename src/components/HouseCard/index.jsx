import React from "react";
import {
  Container,
  Content,
  Details,
  Driver,
  Icon,
  Img,
  Item,
  Love,
  Resize,
} from "./style";
import noImg from "../../assets/icons/Noimge.png";
import bed from "../../assets/icons/bed.svg";
import bath from "../../assets/icons/bath.svg";
import car from "../../assets/icons/car.svg";
import ruler from "../../assets/icons/ruler.svg";
import resize from "../../assets/icons/resize.svg";
import love from "../../assets/icons/love.svg";
const HouseCard = ({
  url,
  title,
  bedCount,
  carCount,
  rulerCount,
  bathCount,
}) => {
  return (
    <Container>
      <Img src={noImg || url} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">Quincy St, Brooklyn, NY, USA</div>
        <Details>
          <Item>
            <Icon src={bed} />
            <div className="info">{bedCount || 0}Beds</div>
          </Item>
          <Item>
            <Icon src={bath} />
            <div className="info">{bathCount || 0} Baths</div>
          </Item>
          <Item>
            <Icon src={car} />
            <div className="info">{carCount || 0} Garage</div>
          </Item>
          <Item>
            <Icon src={ruler} />
            <div className="info">{rulerCount || 0} Sq Ft</div>
          </Item>
        </Details>
      </Content>
      <Driver />
      <Content>
        <Details footer>
          <Item footer>
            <div className="info">$2,800/mo</div>
            <div className="subtitle">$7,500/mo</div>
          </Item>
          <Item frow>
            <Resize frow src={resize} />
            <Love frow src={love} />
          </Item>
        </Details>
      </Content>
    </Container>
  );
};

export default HouseCard;

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
import bedImg from "../../assets/icons/bed.svg";
import bathImg from "../../assets/icons/bath.svg";
import carImg from "../../assets/icons/car.svg";
import rulerImg from "../../assets/icons/ruler.svg";
import resizeImg from "../../assets/icons/resize.svg";
import loveImg from "../../assets/icons/love.svg";
const HouseCard = ({ data = {}, i }) => {
  const {
    attachments,
    address,
    description,
    city,
    country,
    houseDetails,
    price,
    salePrice,
    category,
  } = data;
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
      <Content>
        <div className="subTitle line">
          {city},{country},{description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"}-
          {category?.name || "category"}, {houseDetails?.room || "0"} rooms
        </div>
        <Details>
          <Item>
            <Icon src={bedImg} />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Item>
          <Item>
            <Icon src={bathImg} />
            <div className="info">{houseDetails?.bath || 0} Baths</div>
          </Item>
          <Item>
            <Icon src={carImg} />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Item>
          <Item>
            <Icon src={rulerImg} />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Item>
        </Details>
      </Content>
      <Driver />
      <Content>
        <Details footer>
          <Item footer>
            <div className="info">{`$${salePrice}/mo` || "$2,800/mo"}</div>
            <div className="subtitle">{`$${price}/mo` || "$7,500/mo"}</div>
          </Item>
          <Item frow>
            <Resize frow src={resizeImg} />
            <Love frow src={loveImg} />
          </Item>
        </Details>
      </Content>
    </Container>
  );
};

export default HouseCard;

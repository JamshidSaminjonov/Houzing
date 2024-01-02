import styled from "styled-components";
import email from "../../assets/icons/email.svg?react";
import phone from "../../assets/icons/phone.svg?react";
import cardHouse from "../../assets/icons/cardHouse.svg?react";
import cardMaps from "../../assets/icons/cardMaps.svg?react";

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 20px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
const Email = styled(email)`
  width: 18px;
  height: 18px;
  & path {
    fill: white;
  }
  width: 100%;
  max-width: 18px;
  max-height: 18px;
  margin-bottom: 20px;
`;
const Phone = styled(phone)`
  width: 18px;
  height: 18px;
  & path {
    fill: white;
  }
  width: 100%;
  max-width: 18px;
  max-height: 18px;
  margin-bottom: 20px;
`;
const House = styled(cardHouse)`
  width: 18px;
  height: 18px;
  & path {
    fill: white;
  }
  width: 100%;
  max-width: 18px;
  max-height: 18px;
  margin-bottom: 20px;
`;
const Maps = styled(cardMaps)`
  width: 18px;
  height: 18px;
  & path {
    fill: white;
  }
  width: 100%;
  max-width: 18px;
  max-height: 18px;
  margin-bottom: 20px;
`;

export { Container, Content, Icon, Email, Title, Item, Phone, House, Maps };

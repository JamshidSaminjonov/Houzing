import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 430px;

  /* filter: box-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06)); */
  border: 1px solid black;
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  margin-bottom: 24px;
  min-height: 220px;
`;
const Content = styled.div`
  padding: 8px 20px;
`;
const Details = styled.div`
  margin-top: ${({ footer }) => !footer && "16px"};
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  display: flex;
  flex-direction: ${({ frow }) => !frow && "column"};
  ${({ footer }) => !footer && "align-items: center; justify-content: center;"};
`;
const Icon = styled.img`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  margin: ${({ frow }) => frow && "0 15px"};
`;
const Driver = styled.div`
  background-color: #e6e9ec;
  height: 1px;
  flex-shrink: 0;
`;
const Resize = styled.img`
  width: 15px;
  height: 15px;
`;
const Love = styled.img`
  width: 35px;
  height: 35px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

export { Container, Img, Content, Details, Icon, Item, Driver, Resize, Love };

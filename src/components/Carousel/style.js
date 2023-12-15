import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 571px;
  border: 1px solid #000;

  /* background-color: red; */
`;
const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => left && "20px"};
  right: ${({ right }) => right && "20px"};
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
  object-fit: cover;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 109.091% */
  letter-spacing: -0.88px;
`;
const Dec = styled.h1`
  margin-top: 8px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const Price = styled.h1`
  color: white;
  margin-top: 9px;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.56px;
`;
export { Container, Arrow, Img, Blur, Content, Title, Main, Dec, Price };

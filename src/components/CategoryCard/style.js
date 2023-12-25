import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 250px;
  max-height: 350px;
  min-height: 330px;
  border-radius: 3px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
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
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  color: #fff;
  margin: ${({ frow }) => frow && "0 15px"};
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { Container, Img, Content, Icon, Blur };

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 235px;
  width: 100%;
  text-align: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  /* height: 434px; */
`;

const Icon = styled.img`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };

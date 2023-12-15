import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const Icon = styled.img`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  /* border: 1px solid #e6e9ec; */
  padding: 30px;
  border-radius: 5px;
  background: #fff;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export { Container, Icon, MenuWrapper, Section };

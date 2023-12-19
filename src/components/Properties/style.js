import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  width: 100%;
  max-width: 1440px;
  padding: var(--padding);
  margin: 0 auto;
  grid-gap: 20px;
`;

export { Container };

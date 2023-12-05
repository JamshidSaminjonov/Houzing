import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: var(--background);
  }
`;
const Logo = styled.img`
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;

export { Container, Wrapper, Contents, Logo, Link };

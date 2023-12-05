import React from "react";
import { ReactDOM } from "react";
import { Container, Contents, Link, Logo, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Contents logo="true" onClick={() => navigate("./home")}>
          <Logo src={LogoImg} />
          <h3>Houzing</h3>
        </Contents>
        <Contents>
          {navbar.map(({ id, title, path }) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={id()}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Contents>
        <Contents>
          <button>Sign in</button>
        </Contents>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;

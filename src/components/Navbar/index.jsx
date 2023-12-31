import React from "react";
import { ReactDOM } from "react";
import { Container, Contents, Link, Logo, Main, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import Button from "../Genenric/Button";
import Filter from "../Genenric/Filter";
import Footer from "../Footer";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Contents logo="true" onClick={() => navigate("./home")}>
            <Logo src={LogoImg} />
            <h3>Houzing</h3>
          </Contents>
          <Contents>
            {navbar.map(({ id, title, path, hidden }) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={id()}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Contents>
          <Contents>
            <Button onClick={() => navigate("/signin")} type="dark">
              Sign in
            </Button>
          </Contents>
        </Wrapper>
      </Main>

      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;

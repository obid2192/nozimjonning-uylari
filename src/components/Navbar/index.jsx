import React from "react";
import { Link, Container, Logo, Kirish, Menu } from "./stayle";
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Container>
        <NavLink to={"/"}>
          <Logo>Logo</Logo>
        </NavLink>

        <Link to={"/"}>Home</Link>
        <Link to={"/body"}>Body</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/footer"}>Footer</Link>
        <Kirish>
          <Menu>Menu 1</Menu>
          <Menu>Menu 2</Menu>
          <Menu>Menu 3</Menu>
        </Kirish>
      </Container>
      <Outlet />
    </div>
  );
};
export default Navbar;

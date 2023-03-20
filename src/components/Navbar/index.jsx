import React from "react";
import "./style.css";
import { Container, Logo, Kirish, Menu } from "./stayle";
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <div>
      <Container>
        <NavLink className={'nav'} to={"/"}>
          <Logo>Logo</Logo>
        </NavLink>

        <NavLink 
          className={({ isActive }) => (isActive ? "active" : "nav")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink className={'nav'} to={"/body"}>Body</NavLink>
        <NavLink className={'nav'} to={"/contact"}>Contact</NavLink>
        <NavLink className={'nav'} to={"/footer"}>Footer</NavLink>
        <Kirish>
          <Menu>Menu 1</Menu>
          <Menu>Menu 2</Menu>
        
        </Kirish>
      </Container>
      <Outlet />
    </div>
  );
};
export default Navbar;

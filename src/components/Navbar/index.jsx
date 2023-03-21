import React from "react";
import "./style.css";
import { Container, Logo, Kirish, Menu } from "./stayle";
import { Outlet, NavLink } from "react-router-dom";
import {Footer} from "../Footer"

export const Navbar = () => {
  return (
    <div>
      <Container>
        <NavLink className={"nav"} to={"/"}>
          <Logo>Logo</Logo>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nav")}
          to={"/"}
        >
          Home 1
        </NavLink>
        <NavLink className={"nav"} to={"/home2"}>
          Home 2
        </NavLink>
        <NavLink className={"nav"} to={"/home3"}>
          Home 3
        </NavLink>
      
        <Kirish>
          
          <NavLink to={"/addhouse"}>
            {" "}
            <Menu>Uy Qo'shish</Menu>
          </NavLink>
          <NavLink to={"/login"}>
            {" "}
            <Menu>Login</Menu>
          </NavLink>
        </Kirish>
      </Container>
      <Outlet />
      <Footer />
    </div>
  );
};
export default Navbar;

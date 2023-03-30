import { useState } from "react";

import "./navbar.css";
import { navbar } from "../../utils/navbar";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { Button } from "../Generic";

const Navbar = () => {
 
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const navigate = useNavigate();


 const Yopiq = () => {
  setCollapse('nav__menu')
  setToggleIcon("toggler__icon");
 }
  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="con">
        <nav className="nav">
          <div className="nav__brand" onClick={() => navigate("/home")}>
            Logo
          </div>
          <ul className={collapse.toString()}>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <NavLink onClick={Yopiq}
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </NavLink>
                )
              );
            })}
            <div className="navBtn">
             <Button type="dark" onClick={Yopiq}>
            Mulk qo'shish{" "}
            </Button>
            <Button onClick={Yopiq}>
            Sign In {" "}
            </Button>
            </div>
          </ul>
          <div className="loginCard">
            <Button type="dark">
            Mulk qo'shish{" "}
            </Button>
            <Button>
            Sign In {" "}
            </Button>
          </div>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;


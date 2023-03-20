import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: crimson;
  max-width: 1440px;
  padding: 0 130px;
  height: 50px;
`;
export const Link = styled(NavLink)`
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: blue;
  font-weight: 600;
  font-style: none;
`;
export const Kirish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Menu = styled.div`
  color: black;
  margin: 0 20px;
`;

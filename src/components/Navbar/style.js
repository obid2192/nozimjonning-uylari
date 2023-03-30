import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  @media (max-width: 600px) {
  }
`;
const Section2 = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Section3 = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
`;

const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  @media (max-width: 600px) {
    display: none;
  }
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FaBarsIcon = styled.div`
  display: none;
  font-size: 22px;
  @media (max-width: 600px) {
    display: block;
  }
`;
export {
  Container,
  Menu,
  Wrapper,
  Section1,
  Section2,
  Section3,
  Logo,
  Link,
  Main,
};

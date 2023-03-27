import styled from "styled-components";
import { ReactComponent as love } from "../../assets/icons/love.svg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  height: 490px;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }

  cursor: pointer;
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
export const Img = styled.div`
  width: 100%;
  height: 210px;
`;

export const Content = styled.div`
  padding: 10px;
`;
export const Header = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Metro = styled.div`
  display: flex;
  align-items: center;
`;
export const MetroIcon = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: black;
`;
export const MetroTitle = styled.div`
  color: red;
  margin: 0 15px;
`;
export const MetroText = styled.div`
  font-size: 13px;
  color: gray;
`;
export const HousePrice = styled.div`
  display: flex;
  align-items: center;
`;
export const Xona = styled.div`
  color: black;
  font-weight: 600;
  font-style: 20px;
`;
export const Price = styled.div`
  margin: 0 20px;
`;
export const HouseAddress = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
`;
export const Bank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
  width: 100px;
  height: 25px;
  border-radius: 15px;
  background-color: blue;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
`;
export const CardFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  margin-top: 10px;
`;
export const Naxlari = styled.div`
  height: 90px;
`;
export const FooterText = styled.div``;
export const FooterButton = styled.button`
  outline: none;
  color: white;
  border: none;
  border-radius: 3px;
  height: 25px;
  width: 120px;
  background-color: crimson;
`;
export const ImgTop = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
`;
export const Icons = styled.div``;
export const TopText = styled.div`
  color: black;
  padding: 5px 10px;
  background-color: white;
  border-radius: 15px;
  font-size: 13px;
  margin: 0 10px;
`;

Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 6px;
  /* background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")}; */
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  :active {
    transform: scale(0.9);
  }
`;
